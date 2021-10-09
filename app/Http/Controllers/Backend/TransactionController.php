<?php

namespace App\Http\Controllers\Backend;

use App\Core\Transaction\TransactionManager;
use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\Membership\Membership;
use App\Models\Membership\UserMembership;
use App\Models\Transaction\Transaction;
use App\Repositories\Backend\Transaction\TransactionRepository;
use App\Services\PayPalService;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    protected $page_size;
    protected $module;
    protected $transaction;
    protected $transaction_manager;
    protected $paypalSvc;

    public function __construct(
        TransactionRepository $transaction,
        TransactionManager $transactionManager,
        PayPalService $paypalSvc)
    {
        $this->page_size    = 25;
        $this->module       = 'transaction';
        $this->transaction  = $transaction;
        $this->paypalSvc    = $paypalSvc;
        $this->transaction_manager = $transactionManager;
    }

    /**
     * @param Request $request
     * @return \Illuminate\View\View
     */
    public function index($type,Request $request)
    {
        $created_at   = $request->get('created_at');
        $code         = $request->get('code');
        $status       = $request->get('status');

        $filter       = [];

        if($created_at != ''){
            $created_at = convertDateRange($created_at);
            $filter     = array_add_dot($filter,'transactions.created_at',['operator' => 'BETWEEN','value' => $created_at]);
        }

        if($code != ''){
            $filter = array_add_dot($filter,'transactions.code',$code);
        }

        if ($type != ''){
            if ($type == 'deposit'){
                $filter = array_add_dot($filter,'transactions.type',Transaction::RECHARGE_TRANSACTION);
            } elseif ($type == 'charge') {
                $filter = array_add_dot($filter,'transactions.type',Transaction::BUY_TRANSACTION);
            }
        }

        $transactions =  $this->transaction->getForDataTable($filter);
        //END Filter

        $data  =  [
            'transactions'    =>  $transactions,
            'module'          =>  $this->module,
            'type'            =>  $type
        ];

        return view('backend.'.$this->module.'.index',$data);
    }

    public function create()
    {
        $data  =  [
            'module'          =>  $this->module
        ];

        return view('backend.'.$this->module.'.create',$data);
    }

    /**
     * @param  $request
     *
     * @return mixed
     * @throws \Throwable
     */
    public function store(Request $request)
    {
        $payment_method_id  =   $request->get('payment_method_id');
        $amount             =   $request->get('amount');
        $res_transaction_id =   $request->get('res_transaction_id');

        if ($amount > 0){
            $save_data  =  $this->transaction_manager->addDeposit(auth()->user(),$request);
            if ($save_data){

                if ($payment_method_id == 1){
                    //Thanh toán PayPal
                    $data   =  [
                        'name'     => 'Add Deposit',
                        'quantity' => 1,
                        'price'    => $save_data->amount,
                        'sku'      => $save_data->id //ID giao dịch
                    ];

                    $transactionDescription = "Add Deposit";
                    $paypalCheckoutUrl = $this->paypalSvc
                        ->setReturnUrl(url('hook/payment/paypal/status'))
                        // ->setCancelUrl(url('paypal/status'))
                        ->setItem($data)
                        ->createPayment($transactionDescription);

                    if ($paypalCheckoutUrl) {
                        return redirect($paypalCheckoutUrl);
                    } else {
                        return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
                    }
                } elseif ($payment_method_id == 2) {

                    $save_data->update([
                        'status'             => Transaction::APPROVED_TRANSACTION,
                        'res_transaction_id' => $res_transaction_id
                    ]);

                    return redirect()->route('admin.transaction.index',['type' => 'deposit'])->withFlashSuccess(__('alerts.backend.generate.updated'));

                } else {
                    #Code Something
                }

            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
            }
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
        }
    }

    /**
     * @param  $request
     * @param $id
     * @return mixed
     * @throws \Throwable
     */
    public function confirm($id,Request $request)
    {
        $transaction  =  Transaction::find($id);
        if ($transaction){
            if ($transaction->status == Transaction::PENDING_TRANSACTION && $transaction->user){
                $transaction->status = Transaction::APPROVED_TRANSACTION;
                $transaction->save();
                //Cộng tiền cho user
                $transaction->user->primaryIncome($transaction->amount);

                return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
            }
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param  $request
     * @param $id
     * @return mixed
     * @throws \Throwable
     */
    public function revert($id,Request $request)
    {
        $transaction  =  Transaction::find($id);
        if ($transaction){
            if ($transaction->status == Transaction::APPROVED_TRANSACTION && $transaction->user){
                $transaction->status = Transaction::REVERTED_TRANSACTION;
                $transaction->save();
                //Cộng tiền cho user
                $transaction->user->primaryOutcome($transaction->amount);
                return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
            }
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $id
     *
     * @return mixed
     */
    public function toggle($id,Request $request)
    {
        $field    =  $request->get('field');
        $value    =  $request->get('value',0);
        $transaction  =  Transaction::find($id);
        if ($transaction){
            if ($value == 0){
                $value =  abs(1-$transaction->$field);
            }
            $transaction->update([$field => $value]);
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $id
     *
     * @throws \Exception
     * @return mixed
     */
    public function destroy($id,Request $request)
    {
        $transaction  =  Transaction::find($id);
        if ($transaction){
            if(in_array($transaction->status,[Transaction::PENDING_TRANSACTION,Transaction::REVERTED_TRANSACTION])){
                $transaction->delete();
                return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.deleted'));
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
            }
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * Mua gói thành viên của user
     *
     * @throws \Exception
     * @return mixed
     */
    public function upgrade(Request $request)
    {
        if ($request->method() == 'GET'){
            $data   =   [];
            return view('backend.transaction.buy.upgrade',$data);
        } else {
            $item_id       =  $request->get('item_id');
            $method_id     =  $request->get('method_id');
            $membership    =  Membership::find($item_id);
            $member_price  =  0;
            $member_number_of_day = 0;
            if ($membership){
                $member_price           =   $membership->price;
                $member_number_of_day   =   $membership->number_of_day;
            }

            $data  =   [
                'amount'    => $member_price,
                'item_id'   => $item_id,
                'payment_method_id' => $method_id
            ];

            //Kiểm tra xem nếu nâng cấp tài khoản thì trong ví có còn đủ tiền không
            if ($method_id == 0){
                $user_wallet   =  auth()->user()->primaryAmount();
                if ($user_wallet < $membership->price){
                    return redirect()->back()->withFlashDanger(__('exceptions.backend.transaction.wallet_not_enough_money'));
                }
            }

            //Kiểm tra xem nếu user đang dùng gói cao nhất thì không được mua tiếp
            if (auth()->user()->canUpgradeMembership()){
                $save_data  =   $this->transaction_manager->buyMembership(auth()->user(),$data);
                if ($save_data){
                    if ($method_id == 1){

                        //Thanh toán PayPal
                        $data   =  [
                            'name'     => 'Upgrade Membership',
                            'quantity' => 1,
                            'price'    => $save_data->amount,
                            'sku'      => $save_data->id //ID giao dịch
                        ];

                        $transactionDescription = "Upgrade Membership";
                        $paypalCheckoutUrl = $this->paypalSvc
                            ->setReturnUrl(url('hook/payment/paypal/status'))
                            // ->setCancelUrl(url('paypal/status'))
                            ->setItem($data)
                            ->createPayment($transactionDescription);

                        if ($paypalCheckoutUrl) {
                            return redirect($paypalCheckoutUrl);
                        } else {
                            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
                        }

                    } else {

                        $save_data->update([
                            'status'  => Transaction::APPROVED_TRANSACTION
                        ]);

                        //Nâng cấp member
                        //Lấy gói dang sử dụng
                        $user_member_check  =   UserMembership::orderBy('id','DESC')->first();
                        if ($user_member_check){
                            $time_start =  $user_member_check->time_start;
                        } else {
                            $time_start =  Carbon::now();
                        }

                        $time_end       =  $time_start->addDay($member_number_of_day);
                        $user_member    =  UserMembership::where('user_id',auth()->user()->id)->where('membership_id',$item_id)->first();
                        if (!$user_member){
                            auth()->user()->membership()->create([
                                'membership_id' => $item_id,
                                'price'         => $member_price,
                                'time_start'    => $time_start,
                                'time_end'      => $time_end
                            ]);
                        }

                        return redirect()->back()->withFlashSuccess(__('alerts.backend.transaction.upgraded'));
                    }
                }
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.transaction.membership_last'));
            }
        }
    }
}

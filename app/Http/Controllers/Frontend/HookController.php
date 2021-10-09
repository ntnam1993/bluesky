<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Transaction\Transaction;
use App\Services\PayPalService;
use Illuminate\Http\Request;

class HookController extends Controller
{
    protected $paypalSvc;

    public function __construct(PayPalService $paypalSvc)
    {
        $this->paypalSvc    = $paypalSvc;
    }

    public function PayPalStatus(Request $request)
    {
        $paymentStatus = $this->paypalSvc->getPaymentStatus();
        if ($paymentStatus){
            $res_data     = json_encode($paymentStatus);
            $pay_id       = $paymentStatus->id;
            $state        = $paymentStatus->state;
            $transactions = $paymentStatus->transactions;
            if ($state == 'approved'){
                foreach ($transactions as $transaction){
                    foreach ($transaction->item_list->items as $item){
                        $sku    =   $item->sku;
                        Transaction::find($sku)->update([
                            'status'             => Transaction::APPROVED_TRANSACTION,
                            'res_data'           => $res_data,
                            'res_transaction_id' => $pay_id,
                        ]);
                    }
                }
                return redirect()->route('admin.transaction.index',['type' => 'deposit'])->withFlashSuccess(__('alerts.backend.generate.updated'));
            }
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
        }
    }
}

<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\Customer;
use App\Models\MailOut\MailOut;
use App\Models\Package\Package;
use App\Models\Warehouse;
use App\Repositories\Backend\Customer\CustomerRepository;
use App\Repositories\Backend\Package\PackageRepository;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    protected $page_size;
    protected $module;
    protected $package;
    protected $customer;

    public function __construct(PackageRepository $package, CustomerRepository $customer)
    {
        $this->page_size  = 25;
        $this->module     = 'package';
        $this->package    = $package;
        $this->customer   = $customer;
    }

    /**
     * @param Request $request
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $created_at   = $request->get('created_at');
        $name         = $request->get('name');
        $status       = $request->get('status');
        $warehouse_id = $request->get('warehouse_id');
        $type         = $request->get('type');

        $filter       = [];
        $filter       = array_add_dot($filter,'packages.parent_id',0);

        if($created_at != ''){
            $created_at = convertDateRange($created_at);
            $filter     = array_add_dot($filter,'packages.created_at',['operator' => 'BETWEEN','value' => $created_at]);
        }

        if($name != ''){
            $filter = array_add_dot($filter,'packages.name',['operator' => 'LIKE','value' => '%'.$name.'%']);
        }

        if($status != ''){
            if ($status == 1 || $status == 3){
                //Nếu lọc theo package (thành công và đang xử lý) thì lọc theo trạng thái mail out
                if ($status == Package::PACKAGE_SUCCESS){
                    $filter = array_add_dot($filter,'mail_outs.status',MailOut::SENT);
                } elseif ($status == Package::PACKAGE_PROCESSING) {
                    $filter = array_add_dot($filter,'mail_outs.status',MailOut::PROCESSING);
                }
            } else {
                $filter = array_add_dot($filter,'packages.status',$status);
            }
        }

        if ($warehouse_id != ''){
            $filter = array_add_dot($filter,'packages.warehouse_id',$warehouse_id);
        }

        if ($type != ''){
            $filter = array_add_dot($filter,'packages.type',$type);
        }

        $packages =  $this->package->getForDataTable($filter);
        //END Filter

        //Danh sách kho
        $data_warehouses = [];
        $warehouses      = Warehouse::all();
        if (!empty($warehouses)){
            foreach ($warehouses as $warehouse){
                $data_warehouses[$warehouse->id] = $warehouse->name;
            }
        }

        //Report Package For Tab
        $filter_report    =  [];
        $filter_report    =  array_add_dot($filter_report,'packages.parent_id',0);
        $report_package   =  $this->package->countPackageWithStatus($filter_report);
        $report_mail_out  =  $this->package->countPackageMailOutWithStatus($filter_report);

        $data  =  [
            'packages'        =>  $packages,
            'module'          =>  $this->module,
            'data_warehouses' =>  $data_warehouses,
            'count_tab'       =>  [
                'all_package'    => $report_package->all_package,
                'count_new'      => $report_package->count_new,
                'count_error'    => $report_package->count_error,
                'count_expected' => $report_package->count_expected,
                'count_mail_out' => $report_mail_out->count_processing,
                'count_sent'     => $report_mail_out->count_sent
            ]
        ];

        return view('backend.'.$this->module.'.index',$data);
    }

    /**
     * @param $request
     *
     * @return mixed
     */
    public function create(Request $request)
    {
        //Danh sách kho
        $data_warehouses = [];
        $warehouses =  Warehouse::all();
        if (!empty($warehouses)){
            foreach ($warehouses as $warehouse){
                $data_warehouses[$warehouse->id] = $warehouse->name;
            }
        }

        //Phân loại gói
        $package_types  = config('package.type');

        $data       =  [
            'module'        => $this->module,
            'warehouses'    => $data_warehouses,
            'package_types' => $package_types
        ];
        return view('backend.'.$this->module.'.create',$data);
    }

    /**
     * @param  $request
     *
     * @return mixed
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     */
    public function store(Request $request)
    {
        $warehouse_id    =  $request->get('warehouse_id');
        $type            =  $request->get('type');
        $name            =  $request->get('name');
        $tracking_no     =  $request->get('tracking_no');
        $sender_address  =  $request->get('sender_address');
        $note            =  $request->get('note');
        $quantity        =  $request->get('quantity');
        $weight          =  $request->get('weight');
        $width           =  $request->get('width');
        $height          =  $request->get('height');
        $length          =  $request->get('length');


        $package  =  Package::where('tracking_no',$tracking_no)->first();
        if (!$package){

            $save_data = Package::create([
                'warehouse_id'   =>  $warehouse_id,
                'type'           =>  $type,
                'name'           =>  $name,
                'tracking_no'    =>  $tracking_no,
                'sender_address' =>  $sender_address,
                'note'           =>  $note,
                'quantity'       =>  $quantity,
                'weight'         =>  $weight,
                'width'          =>  $width,
                'height'         =>  $height,
                'length'         =>  $length
            ]);

            if ($save_data){
                return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.created'));
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
            }

        } else {
            return redirect()->back()->withInput()->withFlashDanger(__('exceptions.backend.generate.already_exists'));
        }
    }


    /**
     * @param Request $request
     * @param $id
     *
     * @return mixed
     */
    public function edit($id,Request $request)
    {
        $package  =  Package::find($id);
        if ($package){

            //Danh sách kho
            $data_warehouses = [];
            $warehouses =  Warehouse::all();
            if (!empty($warehouses)){
                foreach ($warehouses as $warehouse){
                    $data_warehouses[$warehouse->id] = $warehouse->name;
                }
            }

            $batteries      = config('package.batteries');

            //Phân loại gói
            $package_types  = config('package.type');
            $countries      = Country::all();

            $data =  [
                'module'        =>  $this->module,
                'package'       =>  $package,
                'batteries'     =>  $batteries,
                'countries'     =>  $countries,
                'warehouses'    =>  $data_warehouses,
                'package_types' =>  $package_types
            ];

            if ($request->ajax()){
                return view('backend.'.$this->module.'.modal.edit_item',$data);
            } else {
                return view('backend.'.$this->module.'.edit',$data);
            }

        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param  Request  $request
     * @param  $id
     *
     * @return mixed
     * @throws \Throwable
     */
    public function update($id,Request $request)
    {
        $warehouse_id    =  $request->get('warehouse_id');
        $type            =  $request->get('type');
        $tracking_no     =  $request->get('tracking_no');
        $sender_address  =  $request->get('sender_address');
        $note            =  $request->get('note');
        $description     =  $request->get('description');
        $quantity        =  $request->get('quantity');
        $weight          =  $request->get('weight');
        $width           =  $request->get('width');
        $height          =  $request->get('height');
        $length          =  $request->get('length');
        $price           =  $request->get('price');
        $origin_id       =  $request->get('origin_id');
        $battery         =  $request->get('battery');
        $consolidation_type =  $request->get('consolidation_type');

        $package  =  Package::find($id);
        if ($package){
            $package->update([
                'warehouse_id'   =>  $warehouse_id,
                'type'           =>  $type,
                'tracking_no'    =>  $tracking_no,
                'sender_address' =>  $sender_address,
                'note'           =>  $note,
                'description'    =>  $description,
                'quantity'       =>  $quantity,
                'price'          =>  $price,
                'origin_id'      =>  $origin_id,
                'battery'        =>  $battery,
                'weight'         =>  $weight,
                'width'          =>  $width,
                'height'         =>  $height,
                'length'         =>  $length
            ]);

            //Cập nhật consolidate nếu có
            if (!empty($consolidation_type)){
                foreach ($consolidation_type as $package_id => $c_type){
                    Package::find($package_id)->update([
                        'consolidation_type'    => $c_type,
                        'consolidation_status'  => 1
                    ]);
                }
            }

            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param  Request  $request
     * @param  $id
     *
     * @return mixed
     * @throws \Throwable
     */
    public function show($id,Request $request)
    {
        $package  =  Package::find($id);
        if ($package){

            $package_photos = [];
            if ($package->photos){
                foreach ($package->photos as $photo){
                    $package_photos[] = [
                        'id'    => $photo->id,
                        'name'  => $photo->original_name,
                        'size'  => $photo->original_size,
                        'type'  => 'image/png',
                        'url'       => $photo->showPicture(),
                        'url_large' => $photo->showPicture('large'),
                        'files' => [
                            $photo->original_name => route('admin.photo.delete',$photo)
                        ]
                    ];
                }
            }

            \JavaScript::put([
                'package_photos' => $package_photos
            ]);

            $data =  [
                'module'         => $this->module,
                'package'        => $package,
                'package_photos' => $package_photos,
                'total_photo'    => count($package_photos) - 6
            ];

            return view('backend.'.$this->module.'.show',$data);
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
    public function mailOut($id,Request $request)
    {
        $package  =  Package::find($id);
        if ($package){
            $batteries    = config('package.batteries');
            $countries    = Country::all(['id', 'name']);
            $data_country = [];
            foreach ($countries as $country){
                $data_country[$country->id] = $country->name;
            }
            $data =  [
                'module'    =>  $this->module,
                'package'   =>  $package,
                'batteries' =>  $batteries,
                'countries' =>  $data_country
            ];
            return view('backend.'.$this->module.'.mail_out.create',$data);
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
    public function storeMailOut($id,Request $request)
    {
        $package    = Package::find($id);
        if ($package) {

            $description     =  $request->get('description');
            $quantity        =  $request->get('quantity');
            $weight          =  $request->get('weight');
            $width           =  $request->get('width');
            $height          =  $request->get('height');
            $length          =  $request->get('length');
            $note            =  $request->get('note');
            $submit          =  $request->get('send');
            $d_weight        =  0;

            //Check mail out nếu số lượng < số lượng tổng thì mới cho phép
            $quantity_mail_out  =  MailOut::where('package_id',$package->id)->sum('quantity');
            $total_quantity     = $package->quantity;
            $total_Invalid      = $total_quantity - ($quantity_mail_out + $quantity);
            if ($total_Invalid < 0){
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
            } elseif ($total_Invalid == 0){
                //Sử dụng hết Item
                $package->update([
                   'status' => Package::PACKAGE_SUCCESS
                ]);
            }

            $save_data  =  $package->mail_outs()->create([
                'description' => $description,
                'quantity'    => $quantity,
                'weight'      => $weight,
                'width'       => $width,
                'height'      => $height,
                'length'      => $length,
                'd_weight'    => $d_weight,
                'note'        => $note,
                'status'      => MailOut::PROCESSING
            ]);

            if ($save_data) {
                if ($submit == 'declaration'){
                    return redirect()->route('admin.package.declaration.create', ['id' => $package->id, 'mail_out_id' => $save_data->id])->withFlashSuccess(__('alerts.backend.generate.created'));
                } elseif ($submit == 'address') {
                    return redirect()->route('admin.package.address.select', ['id' => $package->id, 'mail_out_id' => $save_data->id])->withFlashSuccess(__('alerts.backend.generate.created'));
                } else {
                    return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.created'));
                }
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
            }
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $mail_out_id
     * @param $package_id
     *
     * @return mixed
     */
    public function editMailOut($package_id,$mail_out_id,Request $request)
    {
        $mail_out    = MailOut::find($mail_out_id);
        if ($mail_out) {
            $package = Package::find($package_id);
            $data    = [
                'module'    =>  $this->module,
                'package'   =>  $package,
                'mail_out'  =>  $mail_out
            ];
            return view('backend.'.$this->module.'.mail_out.edit',$data);
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $mail_out_id
     * @param $package_id
     *
     * @return mixed
     */
    public function updateMailOut($package_id,$mail_out_id,Request $request)
    {
        $mail_out    = MailOut::find($mail_out_id);
        $package     = Package::find($package_id);
        if ($mail_out) {

            $description     =  $request->get('description');
            $quantity        =  $request->get('quantity');
            $weight          =  $request->get('weight');
            $width           =  $request->get('width');
            $height          =  $request->get('height');
            $length          =  $request->get('length');
            $note            =  $request->get('note');
            $save            =  $request->get('save');
            $d_weight        =  0;

            if ($mail_out->quantity != $quantity){
                //Check mail out nếu số lượng < số lượng tổng thì mới cho phép
                $total_quantity     = $package->quantity;
                $quantity_mail_out  = MailOut::where('package_id',$package->id)->sum('quantity');
                $total_Invalid      = $total_quantity - ($quantity_mail_out + $quantity - $mail_out->quantity);
                if ($total_Invalid < 0){
                    return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
                } elseif ($total_Invalid == 0){
                    //Sử dụng hết Item
                    $package->update([
                        'status' => Package::PACKAGE_SUCCESS
                    ]);
                }
            }

            $save_data = $mail_out->update([
                'description' => $description,
                'quantity'    => $quantity,
                'weight'      => $weight,
                'width'       => $width,
                'height'      => $height,
                'length'      => $length,
                'd_weight'    => $d_weight,
                'note'        => $note
            ]);

            if ($save_data) {

                if ($save == 'address'){

                    $mail_out->update([
                        'status' => MailOut::PROCESSING
                    ]);

                    return redirect()->route('admin.package.address.select',[$package,$mail_out])->withFlashSuccess(__('alerts.backend.generate.updated'));
                }

                return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
            }

        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $mail_out_id
     * @param $package_id
     *
     * @return mixed
     */
    public function confirmMailOut($package_id,$mail_out_id,Request $request)
    {
        $customer_id = $request->get('customer_id');
        $mail_out    = MailOut::find($mail_out_id);
        $package     = Package::find($package_id);
        if ($mail_out) {

            //Cập nhật trạng thái mail out
            $save_data = $mail_out->update([
                'status'      => MailOut::SENT,
                'customer_id' => $customer_id
            ]);

            if ($save_data) {
                return redirect()->route('admin.package.mail_out',[$package])->withFlashSuccess(__('alerts.backend.generate.updated'));
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
            }

        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $mail_out_id
     * @param $package_id
     *
     * @return mixed
     */
    public function cancelMailOut($package_id,$mail_out_id,Request $request)
    {
        $mail_out    = MailOut::find($mail_out_id);
        $package     = Package::find($package_id);
        if ($mail_out) {

            $save_data = $mail_out->update([
                'status'      => MailOut::PROCESSING,
                'customer_id' => 0
            ]);

            if ($save_data) {
                return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.update_error'));
            }

        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $mail_out_id
     * @param $package_id
     *
     * @throws \Exception
     * @return mixed
     */
    public function destroyMailOut($package_id,$mail_out_id,Request $request)
    {
        $package   = Package::find($package_id);
        $mail_out  =  MailOut::find($mail_out_id);
        if ($mail_out){
            $mail_out->delete();

            //Cập nhật lại trạng thái package dựa vào quantity
            $total_quantity     = $package->quantity;
            $quantity_mail_out  = MailOut::where('package_id',$package->id)->sum('quantity');
            $total_Invalid      = $total_quantity - $quantity_mail_out;
            if ($total_Invalid > 0){
                $package->update([
                    'status'    => Package::PACKAGE_NEW
                ]);
            }

            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.deleted'));
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
    public function selectAddress($package_id,$mail_out_id,Request $request)
    {
        $name       =  $request->get('name');
        $phone      =  $request->get('phone');
        $city       =  $request->get('city');
        $country_id =  $request->get('country_id');
        $package    =  Package::find($package_id);
        $mail_out   =  MailOut::find($mail_out_id);
        if ($mail_out){

            $countries    = Country::all(['id', 'name']);
            $data_country = [];

            foreach ($countries as $country){
                $data_country[$country->id] = $country->name;
            }

            $filter   = [];

            if($name != ''){
                $filter = array_add_dot($filter,'customers.name',['operator' => 'LIKE','value' => '%'.$name.'%']);
            }

            if ($phone != ''){
                $filter = array_add_dot($filter,'customers.phone',['operator' => 'LIKE','value' => '%'.$phone.'%']);
            }

            if ($city != ''){
                $filter = array_add_dot($filter,'customers.city',['operator' => 'LIKE','value' => '%'.$city.'%']);
            }

            if ($country_id != ''){
                $filter = array_add_dot($filter,'customers.country_id',$country_id);
            }

            $customers = $this->customer->getForDataTable($filter);

            $data = [
                'module'    =>  $this->module,
                'package'   =>  $package,
                'mail_out'  =>  $mail_out,
                'countries' =>  $data_country,
                'customers' =>  $customers
            ];

            return view('backend.'.$this->module.'.address',$data);
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $package_id
     * @param $mail_out_id
     *
     * @return mixed
     */
    public function shipping($package_id,$mail_out_id,Request $request)
    {
        $customer_id =  $request->get('customer_id');
        $package     =  Package::find($package_id);
        $mail_out    =  MailOut::find($mail_out_id);
        if ($mail_out){
            if ($customer_id > 0){
                $customer   =   Customer::find($customer_id);
                if ($customer){
                    $data   =   [
                        'customer' =>  $customer,
                        'package'  =>  $package,
                        'mail_out' =>  $mail_out,
                        'module'   =>  $this->module
                    ];
                    return view('backend.'.$this->module.'.shipping',$data);
                } else {
                    return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
                }
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
        $package  =  Package::find($id);
        if ($package){
            if ($value == 0){
                $value =  abs(1-$package->$field);
            }
            $package->update([$field => $value]);
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
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
    public function createConsolidate(Request $request)
    {
        $consolidation_id   =  $request->get('consolidation_id');
        $items              =  $request->get('items');
        if ($items != ''){

            $package_list     = explode(',',$items);
            if (!empty($package_list)){

                //Cập nhật package mới vào consolidate
                if ($consolidation_id > 0){

                    Package::whereIn('id',$package_list)->update(['parent_id' => $consolidation_id]);
                    $parent_id  =  $consolidation_id;

                } else {

                    $first_id     = \Arr::first($package_list);
                    $type         = 'consolidate';
                    $package      = Package::find($first_id);
                    $warehouse_id = $package->warehouse_id;

                    $save_data  = Package::create([
                        'warehouse_id'   =>  $warehouse_id,
                        'type'           =>  $type,
                        'quantity'       =>  1
                    ]);

                    Package::whereIn('id',$package_list)->update(['parent_id' => $save_data->id]);
                    $parent_id  =   $save_data->id;

                }

                return redirect()->route('admin.package.edit',['id' => $parent_id])->withFlashSuccess(__('alerts.backend.generate.created'));
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
    public function removeConsolidate($id,Request $request)
    {
        $package  =  Package::find($id);
        if ($package){
            $package->update([
                'consolidation_status' => 0,
                'consolidation_type'   => null,
                'parent_id' => 0
            ]);
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.canceled'));
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
        $package  =  Package::find($id);
        if ($package){
            $package->delete();
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.deleted'));
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
    public function duplicate($id,Request $request)
    {
        $package  =  Package::find($id);
        if ($package){
            $new_package = $package->replicate();
            $new_package->push();
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.copied'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }
}

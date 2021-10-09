<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\Customer;
use App\Models\MailOut\MailOut;
use App\Repositories\Backend\Customer\CustomerRepository;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    protected $page_size;
    protected $module;
    protected $customer;

    public function __construct(CustomerRepository $customer)
    {
        $this->page_size  = 25;
        $this->module     = 'customer';
        $this->customer   = $customer;
    }

    /**
     * @param Request $request
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $name         = $request->get('name');
        $phone        = $request->get('phone');
        $city         = $request->get('city');
        $country_id   = $request->get('country_id');
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
            'countries' =>  $data_country,
            'customers' =>  $customers
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
        $countries    = Country::all(['id', 'name']);
        $data_country = [];

        foreach ($countries as $country){
            $data_country[$country->id] = $country->name;
        }

        $data = [
            'module'    =>  $this->module,
            'countries' =>  $data_country
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
        $name            =  $request->get('name');
        $company_name    =  $request->get('company_name');
        $first_name      =  $request->get('first_name');
        $last_name       =  $request->get('last_name');
        $country_id      =  $request->get('country_id');
        $state_id        =  $request->get('state_id');
        $address_1       =  $request->get('address_1');
        $address_2       =  $request->get('address_2');
        $city            =  $request->get('city');
        $zip_code        =  $request->get('zip_code');
        $phone           =  $request->get('phone');
        $tax_id          =  $request->get('tax_id');
        $back_link       =  $request->get('back_link');

        $customer  =  Customer::where('name',$name)->first();
        if (!$customer){

            $save_data = Customer::create([
                'name'            => $name,
                'company_name'    => $company_name,
                'first_name'      => $first_name,
                'last_name'       => $last_name,
                'country_id'      => $country_id,
                //'state_id'        => $state_id,
                'address_1'       => $address_1,
                'address_2'       => $address_2,
                'city'            => $city,
                'zip_code'        => $zip_code,
                'phone'           => $phone,
                'tax_id'          => $tax_id
            ]);

            if ($save_data){
                if ($back_link != ''){
                    return redirect($back_link.'?customer_id='.$save_data->id)->withFlashSuccess(__('alerts.backend.generate.created'));
                } else {
                    return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.created'));
                }
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
            }

        } else {
            return redirect()->back()->withInput()->withFlashDanger(__('exceptions.backend.generate.already_exists'));
        }
    }

    /**
     * @param $request
     * @param $id
     *
     * @return mixed
     */
    public function edit($id,Request $request)
    {
        $customer  =  Customer::find($id);
        if ($customer){
            $data  =  [
                'module'    => $this->module,
                'customer'  => $customer
            ];
            return view('backend.'.$this->module.'.edit',$data);
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param $request
     * @param $id
     *
     * @return mixed
     */
    public function update($id,Request $request)
    {
        $customer  =  Customer::find($id);
        if ($customer){

            $name            =  $request->get('name');
            $company_name    =  $request->get('company_name');
            $first_name      =  $request->get('first_name');
            $last_name       =  $request->get('last_name');
            $country_id      =  $request->get('country_id');
            $state_id        =  $request->get('state_id');
            $address_1       =  $request->get('address_1');
            $address_2       =  $request->get('address_2');
            $city            =  $request->get('city');
            $zip_code        =  $request->get('zip_code');
            $phone           =  $request->get('phone');
            $tax_id          =  $request->get('tax_id');
            $back_link       =  $request->get('back_link');
            $back_link       =  base64_decode($back_link);

            $save_data       =  $customer->update([
                'name'            => $name,
                'company_name'    => $company_name,
                'first_name'      => $first_name,
                'last_name'       => $last_name,
                'country_id'      => $country_id,
                //'state_id'        => $state_id,
                'address_1'       => $address_1,
                'address_2'       => $address_2,
                'city'            => $city,
                'zip_code'        => $zip_code,
                'phone'           => $phone,
                'tax_id'          => $tax_id
            ]);

            if ($save_data){
                if ($back_link != ''){
                    return redirect($back_link)->withFlashSuccess(__('alerts.backend.generate.created'));
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
     * @param $request
     * @param $id
     *
     * @return mixed
     */
    public function destroy($id,Request $request)
    {
        $customer  =  Customer::find($id);
        if ($customer){
            $customer->delete();
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
        $customer  =  Customer::find($id);
        if ($customer){
            $new_customer = $customer->replicate();
            $new_customer->push();
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.copied'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }
}

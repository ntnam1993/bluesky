<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Warehouse;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    protected $page_size;

    public function __construct()
    {
        $this->page_size  = 25;
    }

    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $warehouses =  Warehouse::paginate($this->page_size);
        return view('backend.warehouse.index',compact('warehouses'));
    }

    /**
     * @param $request
     *
     * @return mixed
     */
    public function create(Request $request)
    {
        return view('backend.warehouse.create');
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
        $name       =  $request->get('name');
        $address    =  $request->get('address');
        $country_id =  $request->get('country_id',0);
        $slug       =  \Str::slug($name);
        $warehouse  =  Warehouse::where('slug',$slug)->first();
        if (!$warehouse){

            $save_data = Warehouse::create([
                'name'       =>  $name,
                'slug'       =>  $slug,
                'address'    =>  $address,
                'country_id' =>  $country_id
            ]);

            if ($save_data){
                return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.created'));
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
            }

        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.already_exists'));
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
        $warehouse  =  Warehouse::find($id);
        if ($warehouse){
            return view('backend.warehouse.edit',compact('warehouse'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param  Request  $request
     * @param  $id
     *
     * @return mixed
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     */
    public function update($id,Request $request)
    {
        $name       =  $request->get('name');
        $address    =  $request->get('address');
        $country_id =  $request->get('country_id',0);
        $slug       =  \Str::slug($name);

        $warehouse  =  Warehouse::find($id);
        if ($warehouse){
            $warehouse->update([
                'name'       => $name,
                'slug'       => $slug,
                'address'    => $address,
                'country_id' => $country_id
            ]);
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }


    /**
     * @param Request $request
     * @param Role              $role
     *
     * @throws \Exception
     * @return mixed
     */
    public function destroy($id,Request $request)
    {
        $warehouse  =  Warehouse::find($id);
        if ($warehouse){
            $warehouse->delete();
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.deleted'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }
}

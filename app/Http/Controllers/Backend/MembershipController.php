<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Membership\Membership;
use App\Models\Membership\MembershipAttribute;
use Illuminate\Http\Request;

class MembershipController extends Controller
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
        $memberships =  Membership::paginate($this->page_size);
        return view('backend.membership.index',compact('memberships'));
    }

    /**
     * @param $request
     *
     * @return mixed
     */
    public function create(Request $request)
    {
        return view('backend.membership.create');
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
        $name             =  $request->get('name');
        $number_of_day    =  $request->get('number_of_day');
        $price            =  $request->get('price',0);
        $membership       =  Membership::where('name',$name)->first();
        if (!$membership){

            $save_data    =  Membership::create([
                'name'              =>  $name,
                'number_of_day'     =>  $number_of_day,
                'price'             =>  $price
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
        $membership  =  Membership::find($id);
        if ($membership){
            return view('backend.membership.edit',compact('membership'));
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
        $name             =  $request->get('name');
        $number_of_day    =  $request->get('number_of_day');
        $price            =  $request->get('price',0);

        $membership  =  Membership::find($id);
        if ($membership){
            $membership->update([
                'name'              =>  $name,
                'number_of_day'     =>  $number_of_day,
                'price'             =>  $price
            ]);
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
        $membership  =  Membership::find($id);
        if ($membership){
            $membership->delete();
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
    public function createAttribute($id,Request $request)
    {
        $membership  =  Membership::find($id);
        if ($membership){
            return view('backend.membership.attribute.create',compact('membership'));
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
    public function storeAttribute($id,Request $request)
    {
        $name        =  $request->get('name');
        $membership  =  Membership::find($id);
        if ($membership){

            $save_data   =   $membership->attributes()->create([
                'name'   =>  $name,
                'status' =>  1
            ]);

            if ($save_data){
                return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.created'));
            } else {
                return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.create_error'));
            }

        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @param $attribute_id
     *
     * @throws \Exception
     * @return mixed
     */
    public function editAttribute($id,$attribute_id,Request $request)
    {
        $attribute      =  MembershipAttribute::find($id);
        if ($attribute){
            $membership =  Membership::find($attribute->membership_id);
            return view('backend.membership.attribute.edit',compact('attribute','membership'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @param $attribute_id
     *
     * @throws \Exception
     * @return mixed
     */
    public function updateAttribute($id,$attribute_id,Request $request)
    {
        $name       =  $request->get('name');
        $attribute  =  MembershipAttribute::find($attribute_id);
        if ($attribute){
            $attribute->update([
                'name'   =>  $name,
            ]);
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @param $attribute_id
     *
     * @throws \Exception
     * @return mixed
     */
    public function destroyAttribute($id,$attribute_id,Request $request)
    {
        $attribute  =  MembershipAttribute::find($attribute_id);
        if ($attribute){
            $attribute->delete();
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
    public function toggleAttribute($id,$attribute_id,Request $request)
    {
        $field     =  $request->get('field');
        $value     =  $request->get('value',0);
        $attribute =  MembershipAttribute::find($attribute_id);
        if ($attribute){
            if ($value == 0){
                $value =  abs(1-$attribute->$field);
            }
            $attribute->update([$field => $value]);
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }
}

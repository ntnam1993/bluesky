<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\Declaration;
use App\Models\MailOut\MailOut;
use App\Models\Package\Package;
use Illuminate\Http\Request;

class DeclarationController extends Controller
{
    protected $module;
    public function __construct()
    {
        $this->module     = 'declaration';
    }

    /**
     * @param $request
     * @param $package_id
     * @param $mail_out_id
     * @return mixed
     */
    public function create($package_id,$mail_out_id,Request $request)
    {
        $mail_out    = MailOut::find($mail_out_id);
        if ($mail_out) {
            $package      = Package::find($package_id);
            $batteries    = config('package.batteries');
            $countries    = Country::all(['id', 'name']);
            $data_country = [];

            foreach ($countries as $country){
                $data_country[$country->id] = $country->name;
            }

            $data = [
                'module'    =>  'package',
                'package'   =>  $package,
                'mail_out'  =>  $mail_out,
                'batteries' =>  $batteries,
                'countries' =>  $data_country
            ];

            return view('backend.package.declaration.create',$data);
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param  $request
     * @param $mail_out_id
     * @param $package_id
     * @return mixed
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     */
    public function store($package_id,$mail_out_id,Request $request)
    {
        $mail_out    = MailOut::find($mail_out_id);
        if ($mail_out){
            $description  =  $request->get('description');
            $quantity     =  $request->get('quantity');
            $price        =  $request->get('price');
            $origin_id    =  $request->get('origin_id');
            $battery      =  $request->get('battery');

            $save_data = Declaration::create([
                'description'    =>  $description,
                'quantity'       =>  $quantity,
                'price'          =>  $price,
                'origin_id'      =>  $origin_id,
                'battery'        =>  $battery,
                'item_id'        =>  $mail_out->id,
                'item_type'      =>  get_class($mail_out),
                'weight'         =>  $mail_out->weight,
                'width'          =>  $mail_out->width,
                'height'         =>  $mail_out->height,
                'length'         =>  $mail_out->length,
                'd_weight'       =>  $mail_out->d_weight,
                'unit_type'      =>  $mail_out->unit_type,
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
     * @return mixed
     * @throws \Throwable
     */
    public function edit($id,Request $request)
    {
        $declaration    =   Declaration::find($id);
        if ($declaration){

            $batteries    = config('package.batteries');
            $countries    = Country::all(['id', 'name']);
            $data_country = [];

            foreach ($countries as $country){
                $data_country[$country->id] = $country->name;
            }

            $data  =  [
                'declaration'  => $declaration,
                'module'       => $this->module,
                'countries'    => $data_country,
                'batteries'    => $batteries
            ];

            return view('backend.package.declaration.edit',$data);
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return mixed
     * @throws \Throwable
     */
    public function update($id,Request $request)
    {
        $declaration      =  Declaration::find($id);
        if ($declaration){

            $description  =  $request->get('description');
            $quantity     =  $request->get('quantity');
            $price        =  $request->get('price');
            $origin_id    =  $request->get('origin_id');
            $battery      =  $request->get('battery');

            $save_data  =   $declaration->update([
                'description'    =>  $description,
                'quantity'       =>  $quantity,
                'price'          =>  $price,
                'origin_id'      =>  $origin_id,
                'battery'        =>  $battery
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
     *
     * @throws \Exception
     * @return mixed
     */
    public function destroy($id,Request $request)
    {
        $declaration   =  Declaration::find($id);
        if ($declaration){
            $declaration->delete();
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.deleted'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }
}

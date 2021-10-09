<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
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
        $countries =  Country::paginate($this->page_size);
        return view('backend.country.index',compact('countries'));
    }

    /**
     * @param $request
     *
     * @return mixed
     */
    public function create(Request $request)
    {
        return view('backend.country.create');
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
        $code       =  $request->get('code');
        $slug       =  \Str::slug($name);
        $country    =  Country::where('slug',$slug)->first();
        if (!$country){

            $save_data = Country::create([
                'name'       =>  $name,
                'code'       =>  $code,
                'slug'       =>  $slug
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
        $country  =  Country::find($id);
        if ($country){
            return view('backend.country.edit',compact('country'));
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
        $code       =  $request->get('code');
        $slug       =  \Str::slug($name);
        $country    =  Country::find($id);
        if ($country){
            $country->update([
                'name'       => $name,
                'code'       => $code,
                'slug'       => $slug
            ]);
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.updated'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }


    /**
     * @param Request $request
     * @param $id
     * @throws \Exception
     * @return mixed
     */
    public function destroy($id,Request $request)
    {
        $country  =  Country::find($id);
        if ($country){
            $country->delete();
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.deleted'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }
}

<?php

namespace App\Http\Controllers\Backend;

use App\Core\Uploader;
use App\Http\Controllers\Controller;
use App\Models\File;
use App\Models\SpecialRequest;
use Illuminate\Http\Request;

class SpecialRequestController extends Controller
{
    protected $page_size;
    protected $module;
    protected $model;
    protected $disk;

    public function __construct(SpecialRequest $request)
    {
        $this->page_size  = 25;
        $this->module     = 'request';
        $this->model      = $request;
        $this->disk       = 'local';
    }

    /**
     * @param Request $request
     *
     * @return mixed
     */
    public function create(Request $request)
    {
        $item_id    =  $request->get('item_id');
        $item_type  =  $request->get('item_type');
        $item       =  $item_type::find($item_id);
        if ($item){
            $data =  [
                'item'  => $item
            ];
            return view('backend.'.$this->module.'.create',$data);
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }

    /**
     * @param Request $request
     *
     * @return mixed
     */
    public function store(Request $request)
    {
        $content    =  $request->get('content');
        $priority   =  $request->get('priority',0);
        $files      =  $request->file('file');
        $type       =  $request->get('type');
        $item_id    =  $request->get('item_id');
        $item_type  =  $request->get('item_type');
        $price      =  0;
        $item       =  $item_type::find($item_id);
        if ($item){

            $save_data = $this->model::create([
                'content'   =>  $content,
                'priority'  =>  $priority,
                'price'     =>  $price,
                'type'      =>  $type,
                'item_id'   =>  $item_id,
                'creator_id'=>  auth()->user()->id,
                'item_type' =>  $item_type
            ]);

            if ($save_data){

                //Upload file đính kèm
                foreach ($files as $key => $file) {
                    try {
                        $path       =   'requests/' . $save_data->id;
                        $file_path  =   Uploader::uploadFile($this->disk, $file, $path);
                        if ($file_path != ''){
                            File::create([
                                'disk' => $this->disk,
                                'path' => $file_path,
                                'original_name' => $file->getClientOriginalName(),
                                'original_ext'  => $file->getClientOriginalExtension(),
                                'original_size' => $file->getSize(),
                                'creator_id'    => auth()->user()->id,
                                'item_id'       => $save_data->id,
                                'item_type'     => get_class($save_data)
                            ]);
                        }

                    } catch (\Exception $exception) {
                        \Log::error($exception->getMessage());
                    }
                }

                return redirect()->route('admin.package.show',$item)->withFlashSuccess(__('alerts.backend.generate.created'));
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
    public function cancel($id)
    {
        $sp_request  =  $this->model::find($id);
        if ($sp_request){
            $sp_request->update([
                'status' => 2
            ]);
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.canceled'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }
}

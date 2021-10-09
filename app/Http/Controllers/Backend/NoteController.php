<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Package\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    protected $page_size;
    protected $module;
    protected $model;

    public function __construct(Note $note)
    {
        $this->page_size  = 25;
        $this->module     = 'note';
        $this->model      = $note;
    }

    /**
     * @param Request $request
     *
     * @return mixed
     */
    public function store(Request $request)
    {
        $item_id    =  $request->get('item_id');
        $item_type  =  $request->get('item_type');
        $content    =  $request->get('content');
        $item       =  $item_type::find($item_id);
        if ($item){

            $save_data = $this->model::create([
                'content'    =>  $content,
                'item_id'    =>  $item_id,
                'item_type'  =>  $item_type,
                'creator_id' =>  auth()->user()->id
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
     * @param $id
     *
     * @return mixed
     */
    public function destroy($id)
    {
        $note  =  $this->model::find($id);
        if ($note){
            $note->delete();
            return redirect()->back()->withFlashSuccess(__('alerts.backend.generate.deleted'));
        } else {
            return redirect()->back()->withFlashDanger(__('exceptions.backend.generate.not_found'));
        }
    }
}

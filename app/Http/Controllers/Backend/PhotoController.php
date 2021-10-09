<?php

namespace App\Http\Controllers\Backend;

use App\Core\Uploader;
use App\Http\Controllers\Controller;
use App\Models\File;
use App\Models\Photo;
use Illuminate\Http\Request;

class PhotoController extends Controller
{
    protected $disk;

    public function __construct()
    {
        $this->disk =  'local';
    }

    public function upload(Request $request)
    {
        $item_id    = $request->get('item_id');
        $item_type  = $request->get('item_type');
        $item       = $item_type::find($item_id);
        if ($item){
            if ($request->ajax()) {
                if ($request->hasFile('file')) {
                    $files       = $request->file('file');
                    $array_files = [];
                    foreach ($files as $key => $file) {
                        try {
                            if ($file->isValid()) {
                                $path = 'photos/' . $item->id;
                                $file_path  = Uploader::uploadFile($this->disk, $file, $path);
                                $array_file = [
                                    'disk' => $this->disk,
                                    'path' => $file_path,
                                    'original_name' => $file->getClientOriginalName(),
                                    'original_ext'  => $file->getClientOriginalExtension(),
                                    'original_size' => $file->getSize(),
                                    'item_id'       => $item_id,
                                    'item_type'     => $item_type,
                                    'creator_id'    => auth()->user()->id
                                ];
                                $save_file = Photo::create($array_file);
                                if ($save_file){
                                    $array_files[$save_file->original_name] = route('admin.photo.delete',$save_file);
                                }
                            }
                        } catch (\Exception $exception) {
                            \Log::error($exception->getMessage());
                        }
                    }

                    return response()->json(['success' => true, 'files' => $array_files]);
                }
            }
        }
    }

    public function delete($id,Request $request)
    {
        if ($request->ajax()) {
            $photo = Photo::find($id);
            if ($photo){
                if ($photo->disk != '' && $photo->path != ''){
                    Uploader::delete($photo->disk,$photo->path);
                }
                $photo->forceDelete();

                return response()->json(['success' => true],200);
            } else {
                return response()->json(['success' => false],404);
            }
        }
    }

}

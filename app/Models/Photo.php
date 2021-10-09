<?php

namespace App\Models;

use App\Core\MyStorage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Photo extends Model
{
    use SoftDeletes;
    protected $table    = 'photos';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;

    public function showPicture($template = 'normal'){
        return MyStorage::getThumbLinkAttribute($this->disk,$this->path,$template);
    }
}

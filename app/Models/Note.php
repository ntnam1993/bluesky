<?php

namespace App\Models\Package;

use App\Models\Auth\User;
use App\Models\File;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model
{
    use SoftDeletes;
    protected $table    = 'notes';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;

    /**
     * @return mixed
     */
    public function creator()
    {
        return $this->belongsTo(User::class,'creator_id');
    }
}

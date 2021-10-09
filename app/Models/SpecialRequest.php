<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SpecialRequest extends Model
{
    use SoftDeletes;

    /**
     * const
     **/
    const NEW     = 0;
    const DONE    = 1;
    const CANCEL  = 2;

    protected $table    = 'special_requests';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;

    /**
     * @return mixed
     */
    public function files()
    {
        return $this->hasMany(File::class,'item_id')->where('item_type',get_class($this))->where('item_id',$this->id);
    }

}

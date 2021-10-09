<?php

namespace App\Models;

use App\Models\Package\Package;
use Illuminate\Database\Eloquent\Model;

class Declaration extends Model
{
    /**
     * const
     **/
    protected $table    = 'declarations';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;

    /**
     * @return mixed
     */
    public function mail_out()
    {
        return '#';
    }
}

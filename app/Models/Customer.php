<?php

namespace App\Models;

use App\Models\Auth\User;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table    = 'customers';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;

    /**
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }

    /**
     * @return mixed
     */
    public function country()
    {
        return $this->belongsTo(Country::class,'country_id');
    }

    /**
     * @return mixed
     */
    public function state()
    {
        return $this->belongsTo(State::class,'state_id');
    }

}

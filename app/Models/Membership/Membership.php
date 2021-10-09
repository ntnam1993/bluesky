<?php

namespace App\Models\Membership;

use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    protected $table    = 'memberships';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;

    /**
     * @return mixed
     */
    public function attributes()
    {
        return $this->hasMany(MembershipAttribute::class);
    }
}

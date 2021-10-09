<?php

namespace App\Models\Membership;

use Illuminate\Database\Eloquent\Model;

class MembershipAttribute extends Model
{
    protected $table    = 'membership_attributes';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;

    /**
     * @return mixed
     */
    public function membership()
    {
        return $this->belongsTo(Membership::class,'membership_id');
    }
}

<?php

namespace App\Models\Membership;

use Illuminate\Database\Eloquent\Model;

class UserMembership extends Model
{
    protected $table    = 'user_memberships';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;
}

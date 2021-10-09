<?php

namespace App\Models\MailOut;

use App\Models\MailOut\Traits\Relationship\MailOutRelationship;
use Illuminate\Database\Eloquent\Model;

class MailOut extends Model
{
    use MailOutRelationship;

    protected $table    = 'mail_outs';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;

    const NEW           = 0;
    const SENT          = 1;
    const PROCESSING    = 2;
}

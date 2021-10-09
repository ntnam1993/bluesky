<?php

namespace App\Models\Transaction;

use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    protected $table    = 'payment_methods';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;
}

<?php

namespace App\Models\Transaction;

use Illuminate\Database\Eloquent\Model;

class BankPayment extends Model
{
    protected $table    = 'bank_payments';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;
}

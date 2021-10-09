<?php

namespace App\Models\Transaction;

use Illuminate\Database\Eloquent\Model;

class TransactionItem extends Model
{
    protected $table    = 'transaction_items';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;
}

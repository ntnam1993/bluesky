<?php

namespace App\Models\Transaction;

use Illuminate\Database\Eloquent\Model;

class VisaCard extends Model
{
    protected $table    = 'visa_cards';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;
}

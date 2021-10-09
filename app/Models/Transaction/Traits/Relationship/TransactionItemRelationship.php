<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/15/20
 * Time: 7:24 AM
 */

namespace App\Models\Transaction\Traits\Relationship;


use App\Models\Transaction\Transaction;

trait TransactionItemRelationship
{
    /**
     * @return mixed
     */
    public function transaction()
    {
        return $this->belongsTo(Transaction::class,'transaction_id');
    }
}
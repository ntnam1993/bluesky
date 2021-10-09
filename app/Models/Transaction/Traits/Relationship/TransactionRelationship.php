<?php

namespace App\Models\Transaction\Traits\Relationship;
use App\Models\Auth\User;
use App\Models\Transaction\PaymentMethod;
use App\Models\Transaction\TransactionItem;

/**
 * Class UserRelationship.
 */
trait TransactionRelationship
{
    /**
     * @return mixed
     */
    public function transaction_items()
    {
        return $this->hasMany(TransactionItem::class,'transaction_id');
    }

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
    public function method()
    {
        return $this->belongsTo(PaymentMethod::class,'payment_method_id');
    }
}

<?php

namespace App\Models\Transaction\Traits\Method;

/**
 * Trait UserMethod.
 */
trait TransactionMethod
{

    /**
     * @return bool
     */
    public function isActive()
    {
        return '#';
    }

    /**
     * @return bool
     */
    public function isConfirmed()
    {
        return '#';
    }

    /**
     * @return bool
     */
    public function isPending()
    {
        return '#';
    }

    /**
     * @return bool
     */
    public function getStatusString()
    {
        if ($this->status == self::PENDING_TRANSACTION){
            return __('labels.backend.transaction.status.pending');
        } elseif ($this->status == self::APPROVED_TRANSACTION) {
            return __('labels.backend.transaction.status.approved');
        } elseif ($this->status == self::REVERTED_TRANSACTION) {
            return __('labels.backend.transaction.status.reverted');
        } elseif ($this->status == self::REVERTED_TRANSACTION) {
            return __('labels.backend.transaction.status.rejected');
        } else {
            return '#';
        }
    }

    /**
     * @return bool
     */
    public function getStatusLabel()
    {
        if ($this->status == self::PENDING_TRANSACTION){
            return '<span class="badge badge-warning">'.__('labels.backend.transaction.status.pending').'</span>';
        } elseif ($this->status == self::APPROVED_TRANSACTION) {
            return '<span class="badge badge-success">'.__('labels.backend.transaction.status.approved').'</span>';
        } elseif ($this->status == self::REVERTED_TRANSACTION) {
            return '<span class="badge badge-primary">'.__('labels.backend.transaction.status.reverted').'</span>';
        } elseif ($this->status == self::REJECTED_TRANSACTION) {
            return '<span class="badge badge-danger">'.__('labels.backend.transaction.status.rejected').'</span>';
        } else {
            return '#';
        }
    }
}

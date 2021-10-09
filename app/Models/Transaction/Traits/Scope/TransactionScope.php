<?php

namespace App\Models\Transaction\Traits\Scope;

/**
 * Class UserScope.
 */
trait TransactionScope
{
    /**
     * @param $query
     * @param bool $confirmed
     *
     * @return mixed
     */
    public function scopeConfirmed($query, $confirmed = true)
    {
        return '#';
    }

    /**
     * @param $query
     * @param bool $status
     *
     * @return mixed
     */
    public function scopeActive($query, $status = true)
    {
        return '#';
    }
}

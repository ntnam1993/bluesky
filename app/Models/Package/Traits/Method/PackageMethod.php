<?php

namespace App\Models\Package\Traits\Method;

/**
 * Trait UserMethod.
 */
trait PackageMethod
{

    /**
     * @return bool
     */
    public function isActive()
    {
        return $this->active;
    }

    /**
     * @return bool
     */
    public function isConfirmed()
    {
        return $this->confirmed;
    }

    /**
     * @return bool
     */
    public function isPending()
    {
        return '#';
    }
}

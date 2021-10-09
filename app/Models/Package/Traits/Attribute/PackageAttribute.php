<?php

namespace App\Models\Package\Traits\Attribute;

/**
 * Trait UserAttribute.
 */
trait PackageAttribute
{
    /**
     * @param $password
     */

    /**
     * @return string
     */
    public function getFullNameAttribute()
    {
        return '#';
    }

    /**
     * @return string
     */
    public function getNameAttribute()
    {
        return '#';
    }

    /**
     * @return mixed
     */
    public function getPictureAttribute()
    {
        return $this->getPicture();
    }
}

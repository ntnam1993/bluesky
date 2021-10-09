<?php

namespace App\Models\MailOut\Traits\Attribute;

/**
 * Trait UserAttribute.
 */
trait MailOutAttribute
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
        return '#';
    }

    /**
     * @return mixed
     */
    public function getShippingShowUrlAttribute()
    {
        return '#';
    }
}

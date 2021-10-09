<?php

namespace App\Models\MailOut\Traits\Relationship;
use App\Models\Declaration;
use App\Models\Package\Package;

/**
 * Class UserRelationship.
 */
trait MailOutRelationship
{
    /**
     * @return mixed
     */
    public function declarations()
    {
        return $this->hasMany(Declaration::class, 'item_id')
            ->where('item_type',get_class($this))
            ->orderBy('id','DESC');
    }

    /**
     * @return mixed
     */
    public function package()
    {
        return $this->belongsTo(Package::class,'package_id');
    }
}

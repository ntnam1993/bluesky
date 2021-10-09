<?php

namespace App\Models\Package;

use Altek\Accountant\Contracts\Recordable;
use Altek\Accountant\Recordable as RecordableTrait;
use App\Models\Package\Traits\Relationship\PackageRelationship;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Package extends Model implements Recordable
{
    use SoftDeletes,
        PackageRelationship,
        RecordableTrait;

    /**
     * const
    **/
    const PACKAGE_NEW        = 0;
    const PACKAGE_SUCCESS    = 1;
    const PACKAGE_ERROR      = 2;
    const PACKAGE_PROCESSING = 3;
    const PACKAGE_EXPECTED   = 4;

    protected $table    = 'packages';
    protected $guarded  = ['id'];
    protected $dates    = ['deleted_at'];
    public $timestamps  = true;
}

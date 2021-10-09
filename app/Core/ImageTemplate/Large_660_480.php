<?php

namespace App\Core\ImageTemplate;

use Intervention\Image\Image;
use Intervention\Image\Filters\FilterInterface;

class Large_660_480 implements FilterInterface
{
    public function applyFilter(Image $image)
    {
        return $image->fit(660, 480);
    }
}
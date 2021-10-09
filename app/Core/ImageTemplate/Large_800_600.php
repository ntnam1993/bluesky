<?php

namespace App\Core\ImageTemplate;

use Intervention\Image\Image;
use Intervention\Image\Filters\FilterInterface;

class Large_800_600 implements FilterInterface
{
    public function applyFilter(Image $image)
    {
        return $image->fit(800, 600);
    }
}
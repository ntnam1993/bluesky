<?php

namespace App\Core\ImageTemplate;

use Intervention\Image\Image;
use Intervention\Image\Filters\FilterInterface;

class SuperLarge implements FilterInterface
{
    public function applyFilter(Image $image)
    {
        return $image->fit(1200);
    }
}
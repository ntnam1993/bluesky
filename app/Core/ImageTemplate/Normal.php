<?php

namespace App\Core\ImageTemplate;

use Intervention\Image\Image;
use Intervention\Image\Filters\FilterInterface;

class Normal implements FilterInterface
{
    public function applyFilter(Image $image)
    {
        return $image->fit(240, 240);
    }
}
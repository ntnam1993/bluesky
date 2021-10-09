<?php

return array(

    /*
    |--------------------------------------------------------------------------
    | Name of route
    |--------------------------------------------------------------------------
    |
    | Enter the routes name to enable dynamic imagecache manipulation.
    | This handle will define the first part of the URI:
    |
    | {route}/{template}/{filename}
    |
    | Examples: "images", "img/cache"
    |
    */

    'route' => null,

    /*
    |--------------------------------------------------------------------------
    | Storage paths
    |--------------------------------------------------------------------------
    |
    | The following paths will be searched for the image filename, submitted
    | by URI.
    |
    | Define as many directories as you like.
    |
    */

    'paths' => array(
        public_path('upload'),
        public_path('images')
    ),

    /*
    |--------------------------------------------------------------------------
    | Manipulation templates
    |--------------------------------------------------------------------------
    |
    | Here you may specify your own manipulation filter templates.
    | The keys of this array will define which templates
    | are available in the URI:
    |
    | {route}/{template}/{filename}
    |
    | The values of this array will define which filter class
    | will be applied, by its fully qualified name.
    |
    */

    'templates' => array(
        'small'             => 'App\Core\ImageTemplate\Small',
        'normal'            => 'App\Core\ImageTemplate\Normal',
        'medium'            => 'App\Core\ImageTemplate\Medium',
        'large'             => 'App\Core\ImageTemplate\Large',
        'large_800_600'     => 'App\Core\ImageTemplate\Large_800_600',
        'large_660_480'     => 'App\Core\ImageTemplate\Large_660_480',
        'superlarge'        => 'App\Core\ImageTemplate\SuperLarge',
        'ads_normal'        => 'App\Core\ImageTemplate\AdsNormal'
    ),

    /*
    |--------------------------------------------------------------------------
    | Image Cache Lifetime
    |--------------------------------------------------------------------------
    |
    | Lifetime in minutes of the images handled by the imagecache route.
    |
    */

    'lifetime' => 43200,

);

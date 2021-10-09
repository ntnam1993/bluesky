<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/19/20
 * Time: 10:32 AM
 */

return [
    'type'  =>  [
        'package'   => 'Package',
        'letter'    => 'Letter',
        'pallet'    => 'Pallet',
        'gift'      => 'Gift'
    ],
    'consolidation' => [
        'type'  => [
            'keep_box'       => 'Keep Outside Box',
            'keep_packing'   => 'Keep Retail Packing',
            'remove_packing' => 'Remove All Packing'
        ]
    ],
    'batteries' => [
        'No batteries',
        'Batteries'
    ],
    'request' => [
        //Danh sách các loại request
        'type'   => [
            'add_photo', 'special', 'repack'
        ],
        'add_photo' => [
            'add_2' => [
                'price' => 2,
                'label' => 'Request price is $2'
            ],
            'add_3' => [
                'price' => 5,
                'label' => 'Request price is $5'
            ],
            'add_10' => [
                'price' => 10,
                'label' => 'Request price is $8'
            ]
        ],
        'special' => [
            'price' => 2,
            'label' => 'Request price is $2',
        ],
        'repack' => [
            'price' => 2,
            'label' => 'Request price is 2$',
        ]
    ],
];
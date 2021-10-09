<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Menus Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used in menu items throughout the system.
    | Regardless where it is placed, a menu item can be listed here so it is easily
    | found in a intuitive way.
    |
    */

    'backend' => [
        'access' => [
            'title' => 'Access',

            'roles' => [
                'all' => 'All Roles',
                'create' => 'Create Role',
                'edit' => 'Edit Role',
                'management' => 'Role Management',
                'main' => 'Roles',
            ],

            'users' => [
                'all' => 'All Users',
                'change-password' => 'Change Password',
                'create' => 'Create User',
                'deactivated' => 'Deactivated Users',
                'deleted' => 'Deleted Users',
                'edit' => 'Edit User',
                'main' => 'Users',
                'view' => 'View User',
            ],
        ],

        'warehouse' => [
            'create' => 'Create Warehouse',
            'edit'   => 'Edit Warehouse',
        ],

        'membership' => [
            'create'  => 'Create Membership',
            'edit'    => 'Edit Membership',
            'upgrade' => 'Upgrade Account'
        ],

        'country' => [
            'create' => 'Create Country',
            'edit'   => 'Edit Country',
        ],

        'package' => [
            'create'      => 'Create Package',
            'edit'        => 'Edit Package',
            'mail_out'    => 'Mail Out',
            'add_request' => 'Add Request',
            'detail'      => 'Detail Package',
            'select_address'  => 'Select MailOut Address',
            'select_carrier'  => 'Carrier Selection',
            'add_declaration' => 'Add Declaration',
            'customs_declaration' => 'Customs Declaration'
        ],

        'customer'  => [
            'create' => 'Create Addresses',
            'edit'   => 'Edit Addresses',
        ],

        'request' => [
            'create'    => 'Create Special Request',
        ],

        'transaction'   => [
            'create'    => 'Add deposit'
        ],

        'log-viewer' => [
            'main' => 'Log Viewer',
            'dashboard' => 'Dashboard',
            'logs' => 'Logs',
        ],

        'sidebar' => [
            'dashboard' => 'Dashboard',
            'warehouse' => 'Warehouse',
            'country'   => 'Country',
            'general'   => 'General',
            'history'   => 'History',
            'system'    => 'System',
            'package'   => [
                'main'             => 'Package',
                'management'       => 'Package Management',
                'mail_out_process' => 'Mail Out In Process',
                'mail_out_sent'    => 'Sent Packages',
                'expected'         => 'Expected Packages',
                'error'            => 'Error Packages',
                'consolidation'    => 'Consolidation History'
            ],
            'customer'  => [
                'main'             => 'My Addresses',
            ],
            'transaction'   => [
                'payment'   => 'Payment History',
                'deposit'   => 'Deposit History',
                'fee'       => 'Fee Store',
                'billing'   => 'Billing'
            ],
            'membership' => [
                'main'      => 'Membership',
            ]
        ],
    ],

    'language-picker' => [
        'language' => 'Language',
        /*
         * Add the new language to this array.
         * The key should have the same language code as the folder name.
         * The string should be: 'Language-name-in-your-own-language (Language-name-in-English)'.
         * Be sure to add the new language in alphabetical order.
         */
        'langs' => [
            'ar' => 'Arabic',
            'az' => 'Azerbaijan',
            'zh' => 'Chinese Simplified',
            'zh-TW' => 'Chinese Traditional',
            'da' => 'Danish',
            'de' => 'German',
            'el' => 'Greek',
            'en' => 'English',
            'es' => 'Spanish',
            'fa' => 'Persian',
            'fr' => 'French',
            'he' => 'Hebrew',
            'id' => 'Indonesian',
            'it' => 'Italian',
            'ja' => 'Japanese',
            'nl' => 'Dutch',
            'no' => 'Norwegian',
            'pt_BR' => 'Brazilian Portuguese',
            'ru' => 'Russian',
            'sv' => 'Swedish',
            'th' => 'Thai',
            'tr' => 'Turkish',
            'uk' => 'Ukrainian',
            'vi' => 'Việt Nam',
        ],
    ],
];

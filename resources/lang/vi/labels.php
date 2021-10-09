<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Labels Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used in labels throughout the system.
    | Regardless where it is placed, a label can be listed here so it is easily
    | found in a intuitive way.
    |
    */

    'general' => [
        'all' => 'All',
        'yes' => 'Yes',
        'no'  => 'No',
        'copyright'  => 'Copyright',
        'custom'     => 'Custom',
        'actions'    => 'Actions',
        'active'     => 'Active',
        'buttons'    => [
            'save'   => 'Save',
            'update' => 'Update'
        ],
        'hide'      => 'Hide',
        'inactive'  => 'Inactive',
        'none' => 'None',
        'show' => 'Show',
        'toggle_navigation'  => 'Toggle Navigation',
        'create_new'         => 'Create New',
        'toolbar_btn_groups' => 'Toolbar with button groups',
        'more'  => 'More',
        'field' => [
            'id'       => 'ID',
            'name'     => 'Name',
            'phone'    => 'Phone',
            'email'    => 'Email',
            'city'     => 'City',
            'country'  => 'Country',
            'tax'      => 'Tax',
            'state'    => 'State',
            'zip_code' => 'Zip code',
            'search'     => 'Search',
            'updated_at' => 'Last Updated',
        ]
    ],

    'backend' => [
        'access' => [

            'roles' => [
                'create' => 'Create Role',
                'edit' => 'Edit Role',
                'management' => 'Role Management',

                'table' => [
                    'number_of_users' => 'Number of Users',
                    'permissions' => 'Permissions',
                    'role' => 'Role',
                    'sort' => 'Sort',
                    'total' => 'role total|roles total',
                ],
            ],

            'users' => [
                'active' => 'Active Users',
                'all_permissions' => 'All Permissions',
                'change_password' => 'Change Password',
                'change_password_for' => 'Change Password for :user',
                'create' => 'Create User',
                'deactivated' => 'Deactivated Users',
                'deleted' => 'Deleted Users',
                'edit' => 'Edit User',
                'management' => 'User Management',
                'no_permissions' => 'No Permissions',
                'no_roles' => 'No Roles to set.',
                'permissions' => 'Permissions',
                'user_actions' => 'User Actions',

                'table' => [
                    'confirmed' => 'Confirmed',
                    'created' => 'Created',
                    'email' => 'E-mail',
                    'id' => 'ID',
                    'last_updated' => 'Last Updated',
                    'name' => 'Name',
                    'first_name' => 'First Name',
                    'last_name' => 'Last Name',
                    'no_deactivated' => 'No Deactivated Users',
                    'no_deleted' => 'No Deleted Users',
                    'other_permissions' => 'Other Permissions',
                    'permissions' => 'Permissions',
                    'abilities' => 'Abilities',
                    'roles' => 'Roles',
                    'social' => 'Social',
                    'total' => 'user total|users total',
                ],

                'tabs' => [
                    'titles' => [
                        'overview' => 'Overview',
                        'history' => 'History',
                    ],

                    'content' => [
                        'overview' => [
                            'avatar' => 'Avatar',
                            'confirmed' => 'Confirmed',
                            'created_at' => 'Created At',
                            'deleted_at' => 'Deleted At',
                            'email' => 'E-mail',
                            'last_login_at' => 'Last Login At',
                            'last_login_ip' => 'Last Login IP',
                            'last_updated' => 'Last Updated',
                            'name' => 'Name',
                            'first_name' => 'First Name',
                            'last_name' => 'Last Name',
                            'status' => 'Status',
                            'timezone' => 'Timezone',
                        ],
                    ],
                ],

                'view' => 'View User',
            ]
        ],

        'warehouse' => [
            'create'     => 'Create Warehouse',
            'edit'       => 'Edit Warehouse',
            'management' => 'Warehouse Management',
            'table'      => [
                'id'         => 'ID',
                'name'       => 'Name',
                'country'    => 'Country',
                'latitude'   => 'Latitude',
                'longitude'  => 'Longitude',
                'address'    => 'Address',
                'created_at' => 'Created',
                'updated_at' => 'Last Updated',
                'total'      => 'Warehouse total|Warehouses total',
            ],
            'view' => 'View Warehouse',
        ],

        'country' => [
            'create'     => 'Create Country',
            'edit'       => 'Edit Country',
            'management' => 'Country Management',
            'table'      => [
                'id'         => 'ID',
                'name'       => 'Name',
                'code'       => 'Code',
                'created_at' => 'Created',
                'updated_at' => 'Last Updated',
                'total'      => 'Country total|Countries total',
            ],
            'view' => 'View Country',
        ],

        'package' => [
            'create'      => 'Create Package',
            'info'        => 'Package Info',
            'edit'        => 'Edit Package',
            'show'        => 'Detail Package',
            'consolidate' => 'Consolidate Package',
            'mail_out'    => 'Mail Out',
            'add_photo'   => 'Add Photo',
            'management'      => 'Package Management',
            'select_address'  => 'Select MailOut Address',
            'select_carrier'  => 'Carrier Selection',
            'add_declaration'     => 'Add Declaration',
            'customs_declaration' => 'Customs Declaration',
            'items'      => 'Package Items',
            'item'       => 'Package Item',
            'edit_item'  => 'Edit Package Item',
            'add_item'   => 'Mail Out Item',
            'table' => [
                'id'          => 'ID',
                'photo'       => 'Photos',
                'info'        => 'Package Info',
                'request'     => 'Request',
                'quantity'    => 'Quantity',
                'warehouse'   => 'Warehouse',
                'type'        => 'Type',
                'tracking_no' => 'No',
                'description' => 'Description',
                'p_size'      => 'Package size',
                'size'        => 'Size',
                'note'        => 'Note',
                'weight'      => 'Weight',
                'created_at'  => 'Created',
                'updated_at'  => 'Last Updated',
                'total'       => 'Package total|Packages total',
                'total_quantity' => 'Total quantity',
                'total_quantity_mail_out' => 'Total quantity Mail Out',
                'action'      => [
                    'mail_out'          => 'Mail Out',
                    'add_photo'         => 'Add Photo',
                    'add_request'       => 'Add Requests',
                    'repack'            => 'Repack this package',
                    'error'             => 'Report error',
                    'trash'             => 'Trash package',
                    'detail'            => 'Detail Package',
                    'add_declaration'   => 'Add Declaration',
                    'selected_address'  => 'Selected address',
                    'print_invoice'     => 'Print Invoice',
                    'cancel_mail_out'   => 'Cancel Mail Out'
                ]
            ],
            'view' => 'View Package',
            'request'    => [
                'create' => 'Create Special Request',
                'message'=> 'Message',
                'table'  => [
                    'action' => [
                        'trash'    => 'Trash Request'
                    ]
                ]
            ],
            'declaration' => [
                'add_item'   => 'Add Item Declaration',
                'edit_item'  => 'Edit Item Declaration',
                'list_item'  => 'Declaration Package Items',
                'total_quantity'  => 'Total Quantity',
                'total_price'     => 'Total Price',
                'table' => [
                    'quantity'    => 'Quantity',
                    'price'       => 'Price',
                    'origin'      => 'Origin',
                    'battery'     => 'Battery',
                    'description' => 'Description',
                    'total'      => 'Declaration Items total|Declaration Items total'
                ]
            ]
        ],

        'customer'  => [
            'create'        => 'Create Address',
            'edit'          => 'Edit Address',
            'show'          => 'Detail Address',
            'management'    => 'Address Management',
            'select'        => 'Select Address',
            'add_new'       => 'Add New Address',
            'table' => [
                'address_1' => 'Address Line 1',
                'address_2' => 'Address Line 2',
                'action' => [
                    'trash' => 'Trash Address'
                ]
            ]
        ],

        'transaction'  => [
            'create'   => 'Add deposit',
            'status'   => [
                'pending'  => 'Pending',
                'approved' => 'Approved',
                'reverted' => 'Reverted',
                'rejected' => 'Rejected'
            ],
            'management'    => [
                'main'      => 'Transaction Management',
                'deposit'   => 'Deposit Balance',
                'order'     => 'Orders'
            ],
            'table' => [
                'id'         => 'ID',
                'amount'     => 'Amount',
                'p_method'   => 'Payment method',
                'note'       => 'Note',
                'status'     => 'Status',
                'updated_at' => 'Last update',
                'total'      => 'Transaction Items total|Transaction Items total',
                'action' => [

                ]
            ]
        ],

        'membership' => [
            'create'     => 'Create Membership',
            'edit'       => 'Edit Membership',
            'management' => 'Membership Management',
            'attribute'  => 'Membership Attributes',
            'table'      => [
                'id'         => 'ID',
                'name'       => 'Name',
                'number_of_day' => 'Number Of Day',
                'price'      => 'Price',
                'created_at' => 'Created',
                'updated_at' => 'Last Updated',
                'total'      => 'Memberships total|Memberships total',
            ],
            'attributes' => [
                'create'     => 'Create Attribute',
                'edit'       => 'Edit Attribute',
                'table'  => [
                    'id'         => 'ID',
                    'name'       => 'Name',
                    'status'     => 'Status',
                    'updated_at' => 'Last Updated',
                    'total'      => 'Attributes total|Attributes total',
                ]
            ],
            'upgrade'  => [
                'period'  => 'Select period',
                'method'  => 'Method'
            ],
            'view' => 'View Membership',
        ]
    ],

    'frontend' => [
        'auth' => [
            'login_box_title' => 'Login',
            'login_button' => 'Login',
            'login_with' => 'Login with :social_media',
            'register_box_title' => 'Register',
            'register_button' => 'Register',
            'remember_me' => 'Remember Me',
        ],

        'contact' => [
            'box_title' => 'Contact Us',
            'button' => 'Send Information',
        ],

        'passwords' => [
            'expired_password_box_title' => 'Your password has expired.',
            'forgot_password' => 'Forgot Your Password?',
            'reset_password_box_title' => 'Reset Password',
            'reset_password_button' => 'Reset Password',
            'update_password_button' => 'Update Password',
            'send_password_reset_link_button' => 'Send Password Reset Link',
        ],

        'user' => [
            'passwords' => [
                'change' => 'Change Password',
            ],

            'profile' => [
                'avatar' => 'Avatar',
                'created_at' => 'Created At',
                'edit_information' => 'Edit Information',
                'email' => 'E-mail',
                'last_updated' => 'Last Updated',
                'name' => 'Name',
                'first_name' => 'First Name',
                'last_name' => 'Last Name',
                'update_information' => 'Update Information',
            ],
        ],
    ],
];

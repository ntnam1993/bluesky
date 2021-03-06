<?php

namespace App\Models\Auth;


use App\Core\Transaction\WalletContract;
use App\Models\Auth\Traits\Attribute\UserAttribute;
use App\Models\Auth\Traits\Method\UserMethod;
use App\Models\Auth\Traits\Relationship\UserRelationship;
use App\Models\Auth\Traits\Scope\UserScope;

/**
 * Class User.
 */
class User extends BaseUser implements WalletContract
{
    use UserAttribute,
        UserMethod,
        UserRelationship,
        UserScope;
}

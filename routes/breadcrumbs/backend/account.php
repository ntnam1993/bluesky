<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/31/20
 * Time: 3:21 PM
 */

Breadcrumbs::for('admin.account.dashboard', function ($trail) {
    $trail->push(__('labels.backend.package.management'), route('admin.account.dashboard'));
});

Breadcrumbs::for('admin.account.edit', function ($trail) {
    $trail->push(__('labels.backend.package.management'), route('admin.account.edit'));
});
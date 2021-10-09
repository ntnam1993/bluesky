<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/15/20
 * Time: 7:45 AM
 */

Breadcrumbs::for('admin.transaction.index', function ($trail) {
    $trail->push(__('labels.backend.transaction.management.main'),'#');
});

Breadcrumbs::for('admin.transaction.create', function ($trail) {
    $trail->push(__('menus.backend.transaction.create'));
});

Breadcrumbs::for('admin.transaction.membership.create', function ($trail) {
    $trail->push(__('menus.backend.membership.upgrade'));
});
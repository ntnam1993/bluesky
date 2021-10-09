<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 6/6/20
 * Time: 5:19 PM
 */

Breadcrumbs::for('admin.membership.index', function ($trail) {
    $trail->push(__('labels.backend.membership.management'), route('admin.membership.index'));
});

Breadcrumbs::for('admin.membership.create', function ($trail) {
    $trail->parent('admin.membership.index');
    $trail->push(__('menus.backend.membership.create'), route('admin.membership.create'));
});

Breadcrumbs::for('admin.membership.edit', function ($trail, $id) {
    $trail->parent('admin.membership.index');
    $trail->push(__('menus.backend.membership.edit'), route('admin.membership.edit', $id));
});
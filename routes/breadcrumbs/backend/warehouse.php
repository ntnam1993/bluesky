<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/16/20
 * Time: 8:22 AM
 */

Breadcrumbs::for('admin.warehouse.index', function ($trail) {
    $trail->push(__('labels.backend.warehouse.management'), route('admin.warehouse.index'));
});

Breadcrumbs::for('admin.warehouse.create', function ($trail) {
    $trail->parent('admin.warehouse.index');
    $trail->push(__('menus.backend.access.roles.create'), route('admin.warehouse.create'));
});

Breadcrumbs::for('admin.warehouse.edit', function ($trail, $id) {
    $trail->parent('admin.warehouse.index');
    $trail->push(__('menus.backend.access.roles.edit'), route('admin.warehouse.edit', $id));
});
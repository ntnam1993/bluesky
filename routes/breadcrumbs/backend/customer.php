<?php
/**
 * Created by PhpStorm.
 * User: macbook
* Date: 5/1/20
* Time: 12:26 AM
*/

Breadcrumbs::for('admin.customer.index', function ($trail) {
    $trail->push(__('labels.backend.customer.management'), route('admin.customer.index'));
});

Breadcrumbs::for('admin.customer.create', function ($trail) {
    $trail->parent('admin.customer.index');
    $trail->push(__('menus.backend.customer.create'), route('admin.customer.create'));
});

Breadcrumbs::for('admin.customer.edit', function ($trail, $id) {
    $trail->parent('admin.customer.index');
    $trail->push(__('menus.backend.customer.edit'), route('admin.customer.edit', $id));
});
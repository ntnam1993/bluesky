<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/21/20
 * Time: 7:40 AM
 */

Breadcrumbs::for('admin.country.index', function ($trail) {
    $trail->push(__('labels.backend.country.management'), route('admin.country.index'));
});

Breadcrumbs::for('admin.country.create', function ($trail) {
    $trail->parent('admin.country.index');
    $trail->push(__('menus.backend.country.create'), route('admin.country.create'));
});

Breadcrumbs::for('admin.country.edit', function ($trail, $id) {
    $trail->parent('admin.country.index');
    $trail->push(__('menus.backend.country.edit'), route('admin.country.edit', $id));
});
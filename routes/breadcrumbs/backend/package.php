<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/19/20
 * Time: 12:16 AM
 */

Breadcrumbs::for('admin.package.index', function ($trail) {
    $trail->push(__('labels.backend.package.management'), route('admin.package.index'));
});

Breadcrumbs::for('admin.package.create', function ($trail) {
    $trail->parent('admin.package.index');
    $trail->push(__('menus.backend.package.create'), route('admin.package.create'));
});

Breadcrumbs::for('admin.package.edit', function ($trail, $id) {
    $trail->parent('admin.package.index');
    $trail->push(__('menus.backend.package.edit'), route('admin.package.edit', $id));
});

Breadcrumbs::for('admin.package.show', function ($trail, $id) {
    $trail->parent('admin.package.index');
    $trail->push(__('menus.backend.package.detail'), route('admin.package.show', $id));
});

Breadcrumbs::for('admin.package.mail_out', function ($trail, $id) {
    $trail->parent('admin.package.index');
    $trail->push(__('menus.backend.package.mail_out'), route('admin.package.mail_out', $id));
});

Breadcrumbs::for('admin.package.declaration.create', function ($trail, $id) {
    $trail->parent('admin.package.index');
    $trail->push(__('menus.backend.package.mail_out'), route('admin.package.mail_out', $id));
    $trail->push(__('menus.backend.package.customs_declaration'));
});

Breadcrumbs::for('admin.package.address.select', function ($trail, $id) {
    $trail->parent('admin.package.index');
    $trail->push(__('menus.backend.package.mail_out'), route('admin.package.mail_out', $id));
    $trail->push(__('menus.backend.package.select_address'));
});

Breadcrumbs::for('admin.package.shipping.show', function ($trail, $id) {
    $trail->parent('admin.package.index');
    $trail->push(__('menus.backend.package.mail_out'), route('admin.package.mail_out', $id));
    $trail->push(__('menus.backend.package.select_carrier'));
});
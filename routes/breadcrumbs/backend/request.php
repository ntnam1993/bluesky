<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/21/20
 * Time: 11:27 PM
 */

Breadcrumbs::for('admin.request.create', function ($trail) {
    $trail->parent('admin.package.index');
    $trail->push(__('menus.backend.request.create'), route('admin.request.create'));
});
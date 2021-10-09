<?php

Breadcrumbs::for('admin.dashboard', function ($trail) {
    $trail->push(__('strings.backend.dashboard.title'), route('admin.dashboard'));
});

require __DIR__.'/auth.php';
require __DIR__.'/log-viewer.php';
require __DIR__.'/warehouse.php';
require __DIR__.'/country.php';
require __DIR__.'/package.php';
require __DIR__.'/request.php';
require __DIR__.'/customer.php';
require __DIR__.'/transaction.php';
require __DIR__.'/account.php';
require __DIR__.'/membership.php';
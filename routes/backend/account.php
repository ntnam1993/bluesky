<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/31/20
 * Time: 3:01 PM
 */
use App\Http\Controllers\Frontend\User\AccountController;
use App\Http\Controllers\Frontend\User\DashboardController;

Route::group([
    'prefix'        => 'account',
    'as'            => 'account.',
    //'middleware'    => 'role:warehouse',
], function () {
    // User Dashboard Specific
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // User Account Specific
    Route::get('edit', [AccountController::class, 'index'])->name('edit');
});
<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/29/20
 * Time: 6:46 AM
 */

use App\Http\Controllers\Backend\CustomerController;

Route::group([
    'prefix'        => 'customer',
    'as'            => 'customer.',
    //'middleware'    => 'role:warehouse',
], function () {

    Route::get('/', [CustomerController::class, 'index'])->name('index');
    Route::get('create', [CustomerController::class, 'create'])->name('create');
    Route::post('store', [CustomerController::class, 'store'])->name('store');

    Route::group(['prefix' => '{id}'], function () {
        Route::get('edit', [CustomerController::class, 'edit'])->name('edit');
        Route::get('show', [CustomerController::class, 'show'])->name('show');
        Route::patch('update', [CustomerController::class, 'update'])->name('update');
        Route::delete('destroy', [CustomerController::class, 'destroy'])->name('destroy');
        Route::get('duplicate', [CustomerController::class, 'duplicate'])->name('duplicate');
    });

});
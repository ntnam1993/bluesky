<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/15/20
 * Time: 10:38 PM
 */

use App\Http\Controllers\Backend\WarehouseController;

Route::group([
    'prefix'        => 'warehouse',
    'as'            => 'warehouse.',
    //'middleware'    => 'role:warehouse',
], function () {

    Route::get('/', [WarehouseController::class, 'index'])->name('index');
    Route::get('create', [WarehouseController::class, 'create'])->name('create');
    Route::post('store', [WarehouseController::class, 'store'])->name('store');

    Route::group(['prefix' => '{id}'], function () {
        Route::get('/show', [WarehouseController::class, 'show'])->name('show');
        Route::get('edit', [WarehouseController::class, 'edit'])->name('edit');
        Route::patch('/update', [WarehouseController::class, 'update'])->name('update');
        Route::delete('/destroy', [WarehouseController::class, 'destroy'])->name('destroy');
    });

});
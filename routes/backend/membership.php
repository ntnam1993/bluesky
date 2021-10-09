<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 6/6/20
 * Time: 5:18 PM
 */

use App\Http\Controllers\Backend\MembershipController;

Route::group([
    'prefix'        => 'membership',
    'as'            => 'membership.',
    //'middleware'    => 'role:warehouse',
], function () {

    Route::get('/', [MembershipController::class, 'index'])->name('index');
    Route::get('create', [MembershipController::class, 'create'])->name('create');
    Route::post('store', [MembershipController::class, 'store'])->name('store');

    Route::group(['prefix' => '{id}'], function () {
        Route::get('show', [MembershipController::class, 'show'])->name('show');
        Route::get('edit', [MembershipController::class, 'edit'])->name('edit');
        Route::patch('update', [MembershipController::class, 'update'])->name('update');
        Route::delete('destroy', [MembershipController::class, 'destroy'])->name('destroy');

        //Các thuộc tính
        Route::group([
            'prefix' => 'item',
            'as'     => 'attribute.',
        ], function () {
            Route::get('create', [MembershipController::class, 'createAttribute'])->name('create');
            Route::post('store', [MembershipController::class, 'storeAttribute'])->name('store');
            Route::group(['prefix' => '{attribute_id}'], function () {
                Route::get('edit', [MembershipController::class, 'editAttribute'])->name('edit');
                Route::patch('update', [MembershipController::class, 'updateAttribute'])->name('update');
                Route::delete('destroy', [MembershipController::class, 'destroyAttribute'])->name('destroy');
                Route::get('toggle', [MembershipController::class, 'toggleAttribute'])->name('toggle');
            });
        });

    });

});
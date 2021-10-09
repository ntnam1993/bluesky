<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/15/20
 * Time: 7:43 AM
 */

use \App\Http\Controllers\Backend\TransactionController;
Route::group([
    'prefix'        => 'transaction',
    'as'            => 'transaction.',
    //'middleware'    => 'role:warehouse',
], function () {
    Route::get('{type}/listing', [TransactionController::class, 'index'])->name('index');
    Route::get('create', [TransactionController::class, 'create'])->name('create');
    Route::post('store', [TransactionController::class, 'store'])->name('store');

    Route::group(['prefix' => '{id}'], function () {
        Route::get('confirm', [TransactionController::class, 'confirm'])->name('confirm');
        Route::get('revert', [TransactionController::class, 'revert'])->name('revert');
        Route::delete('destroy', [TransactionController::class, 'destroy'])->name('destroy');
    });

    //Giao dịch nâng cấp tài khoản
    Route::group([
        'prefix'        => 'membership',
        'as'            => 'membership.',
    ],function (){
        Route::get('upgrade', [TransactionController::class, 'upgrade'])->name('create');
        Route::post('upgrade', [TransactionController::class, 'upgrade'])->name('store');
    });

});
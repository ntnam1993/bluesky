<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/21/20
 * Time: 7:38 AM
 */

use App\Http\Controllers\Backend\CountryController;

Route::group([
    'prefix'        => 'country',
    'as'            => 'country.',
    //'middleware'    => 'role:warehouse',
], function () {

    Route::get('/', [CountryController::class, 'index'])->name('index');
    Route::get('create', [CountryController::class, 'create'])->name('create');
    Route::post('store', [CountryController::class, 'store'])->name('store');

    Route::group(['prefix' => '{id}'], function () {
        Route::get('/show', [CountryController::class, 'show'])->name('show');
        Route::get('edit', [CountryController::class, 'edit'])->name('edit');
        Route::patch('/update', [CountryController::class, 'update'])->name('update');
        Route::delete('/destroy', [CountryController::class, 'destroy'])->name('destroy');
    });

});
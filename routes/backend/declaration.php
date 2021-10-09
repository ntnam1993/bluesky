<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/29/20
 * Time: 6:49 PM
 */
use App\Http\Controllers\Backend\DeclarationController;
Route::group([
    'prefix'        => 'declaration',
    'as'            => 'declaration.',
    //'middleware'    => 'role:warehouse',
], function () {

    Route::post('store', [DeclarationController::class, 'store'])->name('store');

    Route::group(['prefix' => '{id}'], function () {
        Route::get('edit', [DeclarationController::class, 'edit'])->name('edit');
        Route::patch('update', [DeclarationController::class, 'update'])->name('update');
        Route::delete('destroy', [DeclarationController::class, 'destroy'])->name('destroy');
    });

});
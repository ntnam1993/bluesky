<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/19/20
 * Time: 12:12 AM
 */

use App\Http\Controllers\Backend\PackageController;
use \App\Http\Controllers\Backend\DeclarationController;

Route::group([
    'prefix'        => 'package',
    'as'            => 'package.',
    //'middleware'    => 'role:warehouse',
], function () {

    Route::get('/', [PackageController::class, 'index'])->name('index');
    Route::get('create', [PackageController::class, 'create'])->name('create');
    Route::post('store', [PackageController::class, 'store'])->name('store');

    Route::group([
        'prefix' => 'consolidate',
        'as'     => 'consolidate.',
    ], function () {
        Route::get('create', [PackageController::class, 'createConsolidate'])->name('create');
        Route::group(['prefix' => '{id}'], function () {
            Route::get('remove', [PackageController::class, 'removeConsolidate'])->name('remove');
        });
    });

    Route::group(['prefix' => '{id}'], function () {
        Route::get('show', [PackageController::class, 'show'])->name('show');
        Route::get('edit', [PackageController::class, 'edit'])->name('edit');
        Route::patch('update', [PackageController::class, 'update'])->name('update');
        Route::delete('destroy', [PackageController::class, 'destroy'])->name('destroy');
        Route::get('toggle', [PackageController::class, 'toggle'])->name('toggle');
        Route::get('duplicate', [PackageController::class, 'duplicate'])->name('duplicate');

        //Mail Out
        Route::group(['prefix' => 'mail-out'], function () {
            Route::get('/', [PackageController::class, 'mailOut'])->name('mail_out');
            Route::post('/', [PackageController::class, 'storeMailOut'])->name('store_mail_out');
            Route::group(['prefix' => '{mail_out_id}'], function () {
                Route::get('edit', [PackageController::class, 'editMailOut'])->name('mail_out.edit');
                Route::patch('update', [PackageController::class, 'updateMailOut'])->name('mail_out.update');
                Route::post('confirm', [PackageController::class, 'confirmMailOut'])->name('mail_out.confirm');
                Route::get('cancel', [PackageController::class, 'cancelMailOut'])->name('mail_out.cancel');
                Route::delete('destroy', [PackageController::class, 'destroyMailOut'])->name('mail_out.destroy');
            });
        });

        //Declaration
        Route::group([
            'prefix' => '{mail_out_id}/declaration',
            'as'     => 'declaration.'
        ], function () {
            Route::get('/', [DeclarationController::class, 'create'])->name('create');
            Route::post('store', [DeclarationController::class, 'store'])->name('store');
        });

        //Select Address
        Route::group([
            'prefix' => '{mail_out_id}/address',
            'as'     => 'address.'
        ], function () {
            Route::get('select', [PackageController::class, 'selectAddress'])->name('select');
        });

        //Detail shipping
        Route::group([
            'prefix' => '{mail_out_id}/shipping',
            'as'     => 'shipping.'
        ], function () {
            Route::get('/', [PackageController::class, 'shipping'])->name('show');
        });

    });



});
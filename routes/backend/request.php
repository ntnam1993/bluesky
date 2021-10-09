<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/21/20
 * Time: 10:28 PM
 */

Route::group([
    'prefix'     => 'request',
    'as'         => 'request.',
], function () {
    Route::get('create', 'SpecialRequestController@create')->name('create');
    Route::match(['GET','POST'],'store', 'SpecialRequestController@store')->name('store');
    Route::group(['prefix' => '{id}'], function () {
        Route::get('cancel', 'SpecialRequestController@cancel')->name('cancel');
    });
});
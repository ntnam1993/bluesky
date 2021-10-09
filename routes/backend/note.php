<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/21/20
 * Time: 10:25 PM
 */

Route::group([
    'prefix'     => 'note',
    'as'         => 'note.',
], function () {
    Route::post('store', 'NoteController@store')->name('store');
    Route::delete('{id}/destroy', 'NoteController@destroy')->name('destroy');
});
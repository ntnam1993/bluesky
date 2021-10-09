<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/21/20
 * Time: 10:23 PM
 */

Route::group([
    'prefix'     => 'photo',
    'as'         => 'photo.',
], function () {
    Route::get('{id}/download', 'PhotoController@download')->name('download');
    Route::get('{id}/view', 'PhotoController@view')->name('view');
    Route::post('upload', 'PhotoController@upload')->name('upload');
    Route::post('{id}/delete', 'PhotoController@delete')->name('delete');
});
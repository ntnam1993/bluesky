<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 4/21/20
 * Time: 10:23 PM
 */

Route::group([
    'prefix'     => 'file'
], function () {
    Route::get('{id}/delete', 'FileController@destroyFile')->name('admin.file.delete');
    Route::get('{id}/download', 'FileController@downloadFile')->name('admin.file.download');
    Route::get('{id}/view', 'FileController@viewFile')->name('admin.file.view');
    Route::post('upload', 'FileController@upload')->name('admin.file.upload');
    Route::get('create', 'FileController@create')->name('admin.file.create');
});
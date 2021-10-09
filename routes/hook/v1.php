<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 5/21/20
 * Time: 7:12 AM
 */

use \App\Http\Controllers\Frontend\HookController;
Route::group(['prefix' => 'hook'], function () {

    Route::group(['prefix' => 'payment'], function () {
        Route::get('paypal/status', [HookController::class, 'PayPalStatus']);
    });

});
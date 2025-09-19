<?php

use App\Http\Controllers\Backend\Home\HeroSectionController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.home.', 'prefix' => 'home' ,'middleware' => ['auth']], function () {
    Route::group(['as'=> 'hero.', 'prefix' => 'hero' ,'middleware' => ['auth']], function () {
        Route::get('/', [HeroSectionController::class, 'getData'])->name('page');
        Route::post('/update', [HeroSectionController::class, 'update'])->name('update');
    });
});

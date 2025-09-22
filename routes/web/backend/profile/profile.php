<?php

use App\Http\Controllers\Backend\Profile\ProfileController;
use Illuminate\Support\Facades\Route;

Route::group(['as'=> 'admin.profile.', 'prefix' => 'profile' ,'middleware' => ['auth']], function () {
    Route::get('/', [ProfileController::class, 'getData'])->name('page');
    Route::post('/update', [ProfileController::class, 'update'])->name('update');
});

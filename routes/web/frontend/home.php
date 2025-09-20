<?php

use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/',[HomeController::class,'HomePage'])->name('home');

//Route::get('/contact', function() {
//    return view('frontend.contact');
//});

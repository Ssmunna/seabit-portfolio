<?php

use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[HomeController::class,'HomePage'])->name('home');

//Route::get('/contact', function() {
//    return view('frontend.contact');
//});

Route::get('about-my-company', function () {
    return Inertia::render('Frontend/AboutMyCompany/Page');
})->name('home');


Route::get('about-me', function () {
    return Inertia::render('Frontend/AboutMe/Page');
})->name('home');


Route::get('/contact', function () {
    return view('frontend.contact');
});

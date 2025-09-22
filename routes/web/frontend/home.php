<?php

use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'HomePage'])->name('home');


Route::get('contact-details', function () {
    return Inertia::render('Frontend/Contact/Page');
});

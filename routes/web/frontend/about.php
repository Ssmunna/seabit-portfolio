<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/about', function () {
    return Inertia::render('Frontend/About/Page');
})->name('about');


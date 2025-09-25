<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/career', function () {
    return Inertia::render('Frontend/Career/Page');
})->name('career');


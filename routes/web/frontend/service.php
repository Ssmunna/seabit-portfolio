<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/service', function () {
    return Inertia::render('Frontend/Service/Page');
})->name('service');


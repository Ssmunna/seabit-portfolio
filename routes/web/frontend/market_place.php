<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/market-place', function () {
    return Inertia::render('Frontend/MarketPlace/Page');
})->name('marketplace');


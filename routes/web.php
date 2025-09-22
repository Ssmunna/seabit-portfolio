<?php

use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Services\Systems\Tool\Autoloader;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Autoloader::loadFilesRecursivelyInDirs([__DIR__ . '/web/']);



Route::get('/dashboard', [DashboardController::class, 'Home'])->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

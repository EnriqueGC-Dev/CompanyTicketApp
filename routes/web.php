<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

// API User
Route::get('/api/user/data', [UserController::class, 'user']);
Route::post('/api/user/login', [UserController::class, 'login']);

Route::get('/{any}', function () {
    return view('welcome');
});
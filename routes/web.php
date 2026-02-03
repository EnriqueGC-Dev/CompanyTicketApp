<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

// API User
Route::get('/api/user/data', [UserController::class, 'user']);
Route::post('/api/user/login', [UserController::class, 'login']);
Route::post('/api/user/logout', [UserController::class, 'logout']);
Route::get('/api/users/empleados', [UserController::class, 'getAllUsers']);

Route::get('/{any}', function () {
    return view('welcome');
});
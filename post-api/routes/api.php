<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('posts', \App\Http\Controllers\PostController::class)
    ->only(['index', 'store', 'show', 'update', 'destroy']);

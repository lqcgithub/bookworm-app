<?php

use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('books/homepage', [BookController::class, 'homepage'])->name('books.homepage');
Route::get('books/onsale',[BookController::class,'onsale'])->name('books.onsale');
Route::get('books/recommended',[BookController::class,'recommended'])->name('books.recommended');
Route::get('books/popular',[BookController::class,'popular'])->name('books.popular');
Route::resource('books',BookController::class);



//Constrainst Route


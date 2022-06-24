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

//Route::resource('books',BookController::class);
//Route::get('books/onsale',[BookController::class,'onsale'])->name('books.onsale');
//Route::get('books/featured',[BookController::class,'featured'])->name('books.featured');
Route::get('books/homepage', [BookController::class, 'homepage'])->name('books.homepage');

//Constrainst Route


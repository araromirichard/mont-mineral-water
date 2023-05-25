<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('web')->group(function () {
    // Get the cart items
    Route::get('/cart', [CartController::class, 'getCartItems'])->name('cart.items');
});
Route::post('/cart/add', [CartController::class, 'addToCart'])->name('cart.add');
// Remove a product from the cart
Route::delete('/cart/{product_id}', [CartController::class, 'deleteCartItem'])->name('cart.delete');


Route::patch('/cart/{product_id}', [CartController::class, 'updateCart']);


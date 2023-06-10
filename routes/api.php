<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShippingAddressController;

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
    Route::get('/cart/total', [CartController::class, 'getTotalItems']);
});
Route::post('/cart/add', [CartController::class, 'addToCart'])->name('cart.add')->middleware(\App\Http\Middleware\ShareCartItems::class);
// Remove a product from the cart
Route::delete('/cart/{product_id}', [CartController::class, 'deleteCartItem'])->middleware(\App\Http\Middleware\ShareCartItems::class)->name('cart.delete');
// update cart
Route::patch('/cart/{product_id}', [CartController::class, 'updateCart']);
// check if the email exists in the db
Route::post('/check-email', [CheckoutController::class, 'checkEmailExists']);

// check if there a defualt shipping address 
Route::get('/shipping-address/{id}', [ShippingAddressController::class, 'getShippingAddress']);


// fetch products
Route::get('/shop', [ProductController::class, 'fetchAllProducts'])->name('shop-products');




<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\DashboardController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\ProductController as ControllersProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Guest Routes.....
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'contact' => false
    ]);
})->name('homepage');
Route::get('/contact-mont', [ContactUsController::class, 'index'])->name('contact.mont');
Route::post('/save-message', [ContactUsController::class, 'sendMessage'])->name('contact.store');
Route::get('/shop', [ControllersProductController::class, 'index'])->name('shop');
Route::get('/shop/{product}', [ControllersProductController::class, 'showproduct'])->name('show-product');
Route::inertia('/about-mont', 'AboutMontMineralWater')->name('about.mont');



// Admin Routes....
Route::middleware(['auth', 'verified', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('index');
    Route::resource('/users', UserController::class);
    Route::resource('/products', ProductController::class);
    Route::resource('/orders', OrderController::class);
    Route::post('upload-products', [ProductController::class, 'upload'])->name('product-image.upload');
    Route::delete('/revert/{link}', [ProductController::class, 'revertImage'])->name('product-image.delete');
    // Route::put('/orders/{order}', [OrderController::class, 'updateStatus'])->name('orders.updateStatus');
});



// Authenticated Routes....

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/create-shipping', [DashboardController::class, 'createShippingAddress'])->name('create-address');
    Route::post('/save-address', [DashboardController::class, 'saveAddress'])->name('save-address');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/checkout', [CheckoutController::class, 'index'])->name('show-checkout');
    Route::post('/orders', [CheckoutController::class, 'placeOrder'])->name('orders-store');
});

Route::get('auth/redirect', [GoogleAuthController::class, 'redirect'])->name('google-redirect');
Route::get('auth/google/callback', [GoogleAuthController::class, 'callback'])->name('google-callback');

require __DIR__ . '/auth.php';

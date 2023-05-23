<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\CartController;
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
});
Route::get('/contact-mont', function () {
    return Inertia::render('Welcome', ['contact' => true]);
})->name('contact.mont');
Route::get('/shop', [ControllersProductController::class, 'index'])->name('shop');
Route::get('/shop/{product}', [ControllersProductController::class, 'showproduct'])->name('show-product');
Route::inertia('/about-mont', 'AboutMontMineralWater')->name('about.mont');

// cart routes......
Route::post('/cart/add', [CartController::class, 'addToCart'])->name('cart.add');
Route::get('/cart/count', [CartController::class, 'getCount'])->name('cart.count');
Route::get('/cart', [CartController::class, 'showCart'])->name('cart');


// Admin Routes....
Route::middleware(['auth', 'verified', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('index');
    Route::resource('/users', UserController::class);
    Route::resource('/products', ProductController::class);
    Route::post('upload-products', [ProductController::class, 'upload'])->name('product-image.upload');
    Route::delete('/revert/{link}', [ProductController::class, 'revertImage'])->name('product-image.delete');
});



// Authenticated Routes....
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

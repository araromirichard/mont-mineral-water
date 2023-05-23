<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Darryldecode\Cart\Cart;
use Darryldecode\Cart\Facades\CartFacade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $productId = $request->input('product_id');
        $quantity = $request->input('quantity');

        $product = Product::findOrFail($productId);

        CartFacade::add([
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => $quantity,
            'attributes' => [], // Add any additional attributes if needed
        ]);

        return Redirect::back()->with('success', 'Item added to cart successfully.');
    }

    public function showCart()
    {
        $cartItems = CartFacade::getContent();
        $subtotal = CartFacade::getSubTotal();

        return response()->json([
            'cartItems' => $cartItems,
            'subtotal' => $subtotal,
        ]);
    }
}

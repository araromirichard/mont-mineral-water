<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        
        // dd($request);
        $productId = $request->input('product_id');
        $quantity = $request->input('quantity');

        $product = Product::with('productImages')->findOrFail($productId);

        if (!$request->session()->has('cart')) {
            $request->session()->put('cart', []);
        }

        $cartItems = $request->session()->get('cart', []);

        $existingItemIndex = $this->getCartItemIndex($cartItems, $productId);

        if ($existingItemIndex !== -1) {
            $cartItems[$existingItemIndex]['quantity'] += $quantity;
            $message = 'Cart updated successfully.';
        } else {
            $cartItems[] = [
                'productId' => $productId,
                'name' => $product->name,
                'imagePath' => $product->productImages->first()->image_path,
                'size' => $product->size,
                'pack_size' => $product->pack_size,
                'quantity' => $quantity,
                'price' => $product->price
            ];
            $message = 'Product added to the cart successfully.';
        }

        $subtotal = $this->calculateSubtotal($cartItems);

        $request->session()->put('cart', $cartItems);
        $request->session()->put('subtotal', $subtotal);

        $cartItemCount = count($cartItems);
        return response()->json([
            'cartItemCount' => $cartItemCount,
            'message' => $message,
        ]);
    }

    public function updateCart(Request $request)
    {
        $productId = $request->input('product_id');
        $quantity = $request->input('quantity');

        $cartItems = $request->session()->get('cart', []);

        $itemIndex = $this->getCartItemIndex($cartItems, $productId);

        if ($itemIndex !== -1) {
            $cartItems[$itemIndex]['quantity'] = $quantity;

            $subtotal = $this->calculateSubtotal($cartItems);

            $request->session()->put('cart', $cartItems);
            $request->session()->put('subtotal', $subtotal);

            $message = 'Cart updated successfully.';
            return response()->json([
                'cartItems' => $cartItems,
                'subtotal' => $subtotal,
                'message' => $message
            ]);
        }

        $message = 'Item not found in the cart.';
        return response()->json([
            'message' => $message
        ], 404);
    }

    public function deleteCartItem(Request $request, $productId)
    {
        $productId = intval($productId);

        $cartItems = $request->session()->get('cart', []);

        $itemIndex = $this->getCartItemIndex($cartItems, $productId);

        if ($itemIndex !== -1) {
            array_splice($cartItems, $itemIndex, 1);

            $subtotal = $this->calculateSubtotal($cartItems);

            $request->session()->put('cart', $cartItems);
            $request->session()->put('subtotal', $subtotal);

            return response()->json([
                'message' => 'Item removed from the cart.',
                'cartItems' => $cartItems,
                'subtotal' => $subtotal
            ]);
        }

        return response()->json([
            'message' => 'Item not found in the cart.'
        ], 404);
    }

    public function getCartItems(Request $request)
    {
        $cartItems = $request->session()->get('cart', []);
        $subtotal = $request->session()->get('subtotal', 0);

        if (empty($cartItems)) {
            $subtotal = 0;
        }

        return response()->json(['cartItems' => $cartItems, 'subtotal' => $subtotal]);
    }

    public function getTotalItems(Request $request)
    {
        $cartItems = $request->session()->get('cart', []);
        $totalItems = count($cartItems);

        return response()->json(['totalItems' => $totalItems]);
    }

    private function getCartItemIndex($cartItems, $productId)
    {
        foreach ($cartItems as $index => $item) {
            if ($item['productId'] === $productId) {
                return $index;
            }
        }

        return -1;
    }

    private function calculateSubtotal($cartItems)
    {
        $subtotal = 0;

        foreach ($cartItems as $item) {
            $subtotal += $item['quantity'] * $item['price'];
        }

        return $subtotal;
    }
}

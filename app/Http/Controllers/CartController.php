<?php


namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{


    public function addToCart(Request $request)
    {
        $productId = $request->input('product_id');
        $quantity = $request->input('quantity');

        // Find the product by ID or throw an exception
        $product = Product::with('productImages')->findOrFail($productId);

        // Create an empty cart and store it in the session if it doesn't exist
        if (!$request->session()->has('cart')) {
            $request->session()->put('cart', []);
        }

        // Retrieve the cart items from the session
        $cartItems = $request->session()->get('cart', []);

        $existingItemIndex = $this->getCartItemIndex($cartItems, $productId);

        if ($existingItemIndex !== -1) {
            // If the product exists, update the quantity
            $cartItems[$existingItemIndex]['quantity'] += $quantity;
            $message = 'Cart updated successfully.';
        } else {
            // If the product doesn't exist, add it to the cart
            $cartItems[] = [
                'productId' => $productId,
                'name' => $product->name,
                'imagePath' => $product->productImages->first()->image_path,
                'size' => $product->size,
                'quantity' => $quantity,
                'price' => $product->price
            ];
            $message = 'Product added to the cart successfully.';
        }

        // Calculate subtotal
        $subtotal = $this->calculateSubtotal($cartItems);

        // Store the updated cart items in the session
        $request->session()->put('cart', $cartItems);

        // Store the subtotal in the session
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

        // Retrieve the cart items from the session
        $cartItems = $request->session()->get('cart', []);

        // Find the index of the cart item with the specified product ID
        $itemIndex = $this->getCartItemIndex($cartItems, $productId);

        if ($itemIndex !== -1) {
            // If the item exists in the cart, update the quantity
            $cartItems[$itemIndex]['quantity'] = $quantity;

            // Calculate subtotal
            $subtotal = $this->calculateSubtotal($cartItems);

            // Store the updated cart items and subtotal in the session
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
        // Convert $productId to an integer
        $productId = intval($productId);

        // Retrieve the cart items from the session
        $cartItems = $request->session()->get('cart', []);
        // dd($cartItems);
        // Find the item in the cart by product ID
        $itemIndex = $this->getCartItemIndex($cartItems, $productId);
        // dd($itemIndex);
        if ($itemIndex !== -1) {
            // If the item exists, remove it from the cart
            array_splice($cartItems, $itemIndex, 1);

            // Update subtotal
            $subtotal = $this->calculateSubtotal($cartItems);

            // Store the updated cart items and subtotal in the session
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
        // Retrieve the cart items from the session
        $cartItems = $request->session()->get('cart', []);

        // Retrieve the subtotal from the session
        $subtotal = $request->session()->get('subtotal', 0);

        // If the cart items are empty, set the subtotal to 0
        if (empty($cartItems)) {
            $subtotal = 0;
        }

        return response()->json(['cartItems' => $cartItems, 'subtotal' => $subtotal]);
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

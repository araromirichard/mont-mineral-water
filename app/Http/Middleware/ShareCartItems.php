<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ShareCartItems
{
    public function handle(Request $request, Closure $next)
    {
        // Retrieve the cart items from the session
        $cartItems = $request->session()->get('cart', []);

        $totalItems = count($cartItems);

        // Share the totalItems with Inertia
        inertia()->share(['totalItems' => $totalItems]);

        return $next($request);
    }
}

<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
       

        // Retrieve the orderNumber from the session
        $orderNumber = Session::get('orderNumber');
        
        $cartItems = Session::get('cart');

        

        // Retrieve the default shipping address for the authenticated user
        $defaultShippingAddress = null;
        if ($request->user()) {
            $defaultShippingAddress = $request->user()->shippingAddresses()
                ->where('is_default', true)
                ->first();
        }

        return array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },

            'is_admin' => $request->user() ? $request->user()->hasRole('admin') : false,

            // add all flash messages
            'toast' => [
                'success' => $request->session()->get('success') ?? null,
                'error' => $request->session()->get('error') ?? null,
                'info' => $request->session()->get('info') ?? null,
            ],

            
             // Add the user, default shipping address,
            'auth' => [
                'user' => $request->user(),
                'defaultShippingAddress' => $defaultShippingAddress,
                'shippingAddresses' => $request->user() ? $request->user()->shippingAddresses : [],
            ],
            
            "csrf" => csrf_token(),
            
            'orderNumber' => $orderNumber,
            'cartItems' => $cartItems
        ]);
    }
}

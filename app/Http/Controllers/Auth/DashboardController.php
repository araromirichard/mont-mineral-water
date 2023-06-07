<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\ShippingAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('perPage') ?: 5;
        $search = $request->input('search');

        $orders = Order::query()
            ->when($search, function ($query, $search) {
                $query->where('order_number', 'like', "%{$search}%");
            })
            ->with('user') // Include the user information using the relationship
            ->paginate($perPage)
            ->appends(['search' => $search, 'perPage' => $perPage]);

        $filters = [
            'search' => $search,
            'perPage' => $perPage,
        ];

        return Inertia::render('Auth/DashBoard/Index', compact('orders', 'filters'));
    }


    public function createShippingAddress()
    {
        return Inertia::render('Auth/DashBoard/CreateShippingAddress');
    }

    public function saveAddress(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'address' => 'required',
            'apartment' => 'required',
            'contact' => 'required',
            'region' => 'required',
            'district' => 'required',
        ]);

        // Add the authenticated user's ID to the validated data
        $validatedData['user_id'] = Auth::id();

        // Check if the authenticated user has any shipping addresses with is_default set to true
        $hasDefaultAddress = Auth::user()->shippingAddresses()
            ->where('is_default', true)
            ->exists();

        // Create a new ShippingAddress instance and fill it with the validated data
        $shippingAddress = new ShippingAddress($validatedData);

        // Set is_default to true if there are no existing addresses for the user or no default address
        if (!$hasDefaultAddress || Auth::user()->shippingAddresses->isEmpty()) {
            $shippingAddress->is_default = true;
        }
        // Save the shipping address
        $shippingAddress->save();

        return redirect()->route('dashboard')
            ->with('success', 'Shipping address saved successfully.');
    }
}

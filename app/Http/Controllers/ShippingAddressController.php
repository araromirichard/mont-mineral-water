<?php

namespace App\Http\Controllers;

use App\Models\ShippingAddress;
use Illuminate\Http\Request;

class ShippingAddressController extends Controller
{
    public function getShippingAddress($id)
    {
        $shippingAddress = ShippingAddress::where('user_id', $id)
            ->where('is_default', true)
            ->first();

        if ($shippingAddress) {
            // There is a default shipping address for the user
            return response()->json(['message' => 'Default shipping address found', 'shipping_address' => $shippingAddress]);
        } else {
            // No default shipping address found for the user
            return response()->json(['message' => 'No default shipping address found']);
        }
    }
}

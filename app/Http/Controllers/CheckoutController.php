<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Mail;
use App\Mail\OrderPlacedEmail;
use App\Mail\OrderReceivedEmail;
use App\Models\Order;
use Illuminate\Support\Facades\Redirect;
use App\Models\OrderItem;
use App\Models\ShippingAddress;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index(Request $request)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $user = Auth::user();
        $orderItems = [
            'user' => $user,
            'shippingAddress' => $user->shippingAddress ?? null,
            'cartItems' => $request->session()->get('cart', []),
            'subTotal' => $request->session()->get('subtotal', 0),
            'delivery' => 200,
            'total' => $request->session()->get('subtotal', 0) + 200,
        ];

        return Inertia::render('Shop/CheckOut', [
            'orderItems' => $orderItems,
        ]);
    }

    // place an order 
    public function placeOrder(Request $request)
    {
        $user = Auth::user();
        $cartItems = $request->session()->get('cart');
        $subtotal = $request->session()->get('subtotal');
        $deliveryFee = 200;
        $total = $subtotal + $deliveryFee;
        $validator = Validator::make($request->all(), [
            'shipping.address' => 'required|string',
            'shipping.apartment' => 'required|string',
            'shipping.contact' => 'required|string',
            'shipping.region' => 'required|string',
            'shipping.district' => 'required|string',
            'saveAddress' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $shippingAddress = [
            'id' => null,
            'address' => $request->input('shipping.address', ''),
            'apartment' => $request->input('shipping.apartment', ''),
            'region' => $request->input('shipping.region', ''),
            'district' => $request->input('shipping.district', ''),
        ];

        if ($user && $request->input('saveAddress')) {
            $shippingData = $request->input('shipping');
            $shippingData['apartment'] = $shippingData['apartment'] ?? '';

            $shippingAddressModel = $user->shippingAddresses()->create($shippingData);

            $shippingAddress['id'] = $shippingAddressModel->id;

            if (!$user->defaultShippingAddress) {
                $shippingAddressModel->is_default = true;
                $shippingAddressModel->save();
            }
        }


        $orderNumber = 'MONT' . substr(Str::uuid()->toString(), 0, 6) . '_' . now()->format('Ymd');

        $order = Order::create([
            'user_id' => $user->id,
            'status' => 'pending',
            'order_number' => $orderNumber,
            'subtotal' => $subtotal,
            'delivery' => $deliveryFee,
            'total' => $total,
        ]);

        $orderItems = [];
        foreach ($cartItems as $cartItem) {
            $orderItem = new OrderItem([
                'product_id' => $cartItem['productId'],
                'product_name' => $cartItem['name'],
                'price' => $cartItem['price'],
                'quantity' => $cartItem['quantity'],
            ]);

            $order->orderItems()->save($orderItem);

            $orderItems[] = [
                'id' => $orderItem->id,
                'product_name' => $orderItem->product_name,
                'quantity' => $orderItem->quantity,
                'price' => $orderItem->price,
            ];
        }

        $mailObj = [
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
            ],
            'shippingAddress' => $shippingAddress,
            'orderItems' => $orderItems,
            'order_number' => $orderNumber,
            'order_total' => $total,
        ];
        // dd($mailObj);
        $this->sendOrderPlacedEmailToAdmin($mailObj);
        $this->sendOrderReceivedEmailToUser($mailObj);

        $request->session()->forget('cart');
        $request->session()->forget('subtotal');

        // Set the orderNumber in session storage
        session()->put('orderNumber', $orderNumber);
        
        // Redirect back to the previous page
        return Redirect::back();
    }



    private function sendOrderPlacedEmailToAdmin($mailObj)
    {

        Mail::to('krobotechies@gmail.com')->send(new OrderPlacedEmail($mailObj));
    }

    private function sendOrderReceivedEmailToUser($mailObj)
    {

        Mail::to($mailObj['user']['email'])->send(new OrderReceivedEmail($mailObj));
    }

    public function checkEmailExists(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
        ]);

        $email = $validatedData['email'];

        $user = User::where('email', $email)->first();

        return response()->json(['exists' => $user ? true : false]);
    }
}

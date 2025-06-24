<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\OrderStatusUpdated;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\ShippingAddress;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->input('perPage') ?: 5;
        $search = $request->input('search');

        $orders = Order::latest()
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

        return Inertia::render('Order/Index', compact('orders', 'filters'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::with('user', 'orderItems.productImage')
            ->findOrFail($id);
        // Assign product images to order items
        foreach ($order->orderItems as $orderItem) {
            $orderItem->productImage = $orderItem->productImage ?? null;
        }

        return Inertia::render('Order/Show', compact('order'));
    }

    /**
     * Update the specified resource in storage.
     */


    public function update(Request $request, Order $order)
    {
        // Validate the request
        $request->validate([
            'selectedStatus' => [
                'required',
                Rule::in(['pending', 'cancelled', 'approved', 'fulfilled']),
            ]
        ]);

        $newStatus = $request->input('selectedStatus');

        // Start a database transaction
        DB::beginTransaction();

        try {
            // Check if the new status is "approved"
            if ($newStatus === 'approved') {
                // Generate the invoice data (you can implement this logic)
                $invoiceData = $this->generateInvoiceData($order);
                // dd($invoiceData['items']);
                // Send email to customer with invoice data
                Mail::to($order->user->email)->send(new OrderStatusUpdated($order, $invoiceData));
            }

            // Update the order status
            $order->update(['status' => $newStatus]);

            // Commit the transaction if both actions are successful
            DB::commit();

            // Return success response
            return redirect()->back()->with('success', 'Order status updated successfully.');
        } catch (\Exception $e) {
            // Handle the email sending error here (e.g., log the error)
            // If there's an error, rollback the transaction
            DB::rollBack();

            return redirect()->back()->with('error', 'Failed to update order status. Error: ' . $e->getMessage());
        }
    }

    /**
     * Get the invoice data for the order.
     */
    private function generateInvoiceData(Order $order)
    {
        // Check if the order has a shipping address; if not, fetch the default address
        if ($order->shipping_address === null) {
            $address = ShippingAddress::where('user_id', $order->user_id)
                ->where('is_default', 1)
                ->firstOrFail();
        } else {
            $address = $order->shipping_address;
        }

        // Fetch the user using the user_id
        $user = User::findOrFail($order->user_id);

        $full_name = $user->first_name . " " . $user->last_name;

        // Get the order items
        $orderItems = $order->orderItems;

        // Generate a random number (e.g., between 1000 and 9999)
        $randomNumber = mt_rand(1000, 9999);

        // Create the invoice number by concatenating "Mo" and the random number
        $invoiceNumber = 'Mo' . $randomNumber;

        // Generate the current date and time in the desired format (e.g., 'd F, Y')
        $createdAt = now()->format('d F, Y');

        // Prepare the address string from the address attributes
        $addressString = $address->address . ", " . $address->apartment . ", " . $address->region . ", " . $address->district;

        // Generate the invoice data
        $invoiceData = [
            'order_number' => $order->order_number,
            'customer_name' => $full_name,
            'address' => $addressString,
            'phone' => $user->phone,
            'total' => $order->total,
            'items' => $orderItems,
            'invoicenumber' => $invoiceNumber,
            'created_at' => $createdAt,
        ];
        // dd($invoiceData);
        return $invoiceData;
    }


    // ... other methods ...
}

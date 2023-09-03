<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\OrderStatusUpdated;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\OrderItems;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

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


    // public function show(string $id)
    // {
    //     $order = Order::findOrFail($id);
    //     $orderItems = OrderItem::with('productImage')->where('order_id', $order->id)->get();

    //     // Eager load the product images for all order items
    //     $productImageIds = $orderItems->pluck('product_image_id')->filter()->unique()->toArray();
    //     $productImages = ProductImage::whereIn('id', $productImageIds)->get()->keyBy('id');

    //     // Assign product images to order items
    //     foreach ($orderItems as $orderItem) {
    //         $orderItem->productImage = $productImages[$orderItem->product_image_id] ?? null;
    //     }

    //     return Inertia::render('Order/Show', compact('order', 'orderItems'));
    // }

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

        // dd($order->user->email);
        // validate the request
        $request->validate([
            'selectedStatus' => [
                'required',
                Rule::in(['pending', 'cancelled', 'approved', 'fulfilled']),
            ]
        ]);

        $newStatus = $request->input('selectedStatus');


        try {
            // Update the order status here
            $order->update(['status' => $newStatus]);

            // Send email to customer
            Mail::to($order->user->email)->send(new OrderStatusUpdated($order));

            // Return success response
            return redirect()->back()->with('success', 'Order status updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to update order status. Error: ' . $e->getMessage());
        }
    }

    public function getUserOrders(Request $request)
    {
        $perPage = $request->input('perPage') ?: 5;
        $user = $request->user(); // Get the authenticated user

        $orders = Order::where('user_id', $user->id)
            ->latest()
            ->with('user')
            ->paginate($perPage);

        return Inertia::render('Auth/DashBoard/Index', compact('orders'));
    }
}

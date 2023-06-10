<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\OrderItems;
use App\Models\ProductImage;
use Illuminate\Http\Request;
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

        return Inertia::render('Order/Index', compact('orders', 'filters'));
    }

    /**
     * Display the specified resource.
     */
   
    
    public function show(string $id)
    {
        $order = Order::findOrFail($id);
        $orderItems = OrderItem::with('productImage')->where('order_id', $order->id)->get();
    
        // Eager load the product images for all order items
        $productImageIds = $orderItems->pluck('product_image_id')->filter()->unique()->toArray();
        $productImages = ProductImage::whereIn('id', $productImageIds)->get()->keyBy('id');
    
        // Assign product images to order items
        foreach ($orderItems as $orderItem) {
            $orderItem->productImage = $productImages[$orderItem->product_image_id] ?? null;
        }
    
        return Inertia::render('Order/Show', compact('order', 'orderItems'));
    }
    


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

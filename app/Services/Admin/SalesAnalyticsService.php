<?php

namespace App\Services\Admin;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use stdClass;

class SalesAnalyticsService
{
    public function getSalesAnalytics()
    {
        // Assuming 'price' is the item price.
        $fulfilledOrderItemsQuery = OrderItem::whereHas('order', function ($query) {
            $query->where('status', 'fulfilled');
        });

        $totalFulfilledQuantity = $fulfilledOrderItemsQuery->sum('quantity');
        $totalFulfilledAmount = $fulfilledOrderItemsQuery->sum('price');

        return [
            'totalFulfilledQuantity' => $totalFulfilledQuantity,
            'totalFulfilledAmount' => $totalFulfilledAmount,
            // Add other relevant sales analytics here.
        ];
    }

    public function getMonthlyProductSalesData()
    {
        // Query to get monthly product sales data including product name
        $monthlyProductSalesData = Order::join('order_items', 'orders.id', '=', 'order_items.order_id')
            ->join('products', 'order_items.product_id', '=', 'products.id') // Join the products table
            ->select(
                DB::raw('DATE_FORMAT(orders.updated_at, "%Y-%m") AS month'),
                'order_items.product_id',
                'products.name as product_name', // Include product name in the select statement
                DB::raw('SUM(order_items.quantity) AS total_quantity_sold')
            )
            ->groupBy('month', 'order_items.product_id', 'products.name') // Group by product name as well
            ->orderBy('month')
            ->get();
    
        return $monthlyProductSalesData;
    }
    


    public function getTotalQuantitySoldPerProduct()
    {
        // Query to get the total quantity sold for each product
        $totalQuantitySoldPerProduct = Order::join('order_items', 'orders.id', '=', 'order_items.order_id')
            ->join('products', 'order_items.product_id', '=', 'products.id') // Join the products table
            ->where('orders.status', 'fulfilled') // Filter for fulfilled orders
            ->select(
                'products.name as product_name',
                DB::raw('SUM(order_items.quantity) AS total_quantity_sold')
            )
            ->groupBy('products.name') // Group by product name
            ->get();

       
        return $totalQuantitySoldPerProduct;
    }

    // ... (other methods)
}

<?php

namespace App\Services\Admin;

use App\Models\Order;
use App\Models\OrderItem;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class OrderService
{
    public function getOrderMetrics()
    {
        $totalOrdersCount = Order::count();
        $pendingOrdersCount = Order::where('status', 'pending')->count();
        $fulfilledOrdersCount = Order::where('status', 'fulfilled')->count();

        return [
            'totalOrdersCount' => $totalOrdersCount,
            'pendingOrdersCount' => $pendingOrdersCount,
            'fulfilledOrdersCount' => $fulfilledOrdersCount,
        ];
    }
    
    public function retrieveLast5Orders()
    {
        // Retrieve the last 5 orders and format created_at and orderItems created_at
        $last5Orders = Order::with(['user', 'orderItems'])->orderBy('created_at', 'desc')->take(5)->get();
        $last5Orders->transform(function ($order) {
            $order->created_at = Carbon::parse($order->created_at)->diffForHumans();
            $order->orderItems->transform(function ($item) {
                $item->created_at = Carbon::parse($item->created_at)->diffForHumans();
                return $item;
            });
            return $order;
        });
        return $last5Orders;
    }
}

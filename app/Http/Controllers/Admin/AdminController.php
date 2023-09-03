<?php
// app/Http/Controllers/Admin/AdminController.php


namespace App\Http\Controllers\Admin;

use App\Charts\PercentageSoldChart;
use App\Charts\ProductMonthlySalesChart;
use App\Http\Controllers\Controller;
use App\Services\Admin\OrderService;
use App\Services\Admin\SalesAnalyticsService;
use App\Services\Admin\UserService;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{

    protected $userService;
    protected $orderService;
    protected $salesAnalyticsService;

    public function __construct(UserService $userService, OrderService $orderService, SalesAnalyticsService $salesAnalyticsService)
    {
        $this->userService = $userService;
        $this->orderService = $orderService;
        $this->salesAnalyticsService = $salesAnalyticsService;
    }

    public function index(ProductMonthlySalesChart $monthlySalesChart, PercentageSoldChart $percentageSoldChart)
    {
        return Inertia::render('Admin/Index', [
            'monthlySalesChart' => $monthlySalesChart->build(),
            'percentageSoldChart' => $percentageSoldChart->build(),
        ]);
    }

    public function getMetrics()
    {
        try {
            $userData = $this->userService->getUserMetrics();
            $last5Users = $this->userService->retrieveLast5Users();
            $orderData = $this->orderService->getOrderMetrics();
            $last5Orders = $this->orderService->retrieveLast5Orders();
            $salesAnalyticsData = $this->salesAnalyticsService->getSalesAnalytics();


            return response()->json([
                'status' => 'success',
                'message' => 'Metrics data retrieved successfully',
                'data' => [
                    'userMetrics' => $userData,
                    'orderMetrics' => $orderData,
                    'salesMetrics' => $salesAnalyticsData,
                    'last5Users' => $last5Users,
                    'last5Orders' => $last5Orders,
                ],
            ], 200);
        } catch (QueryException $e) {
            return $this->handleException($e);
        }
    }

    // public function getSalesData(Request $request)
    // {
    //     try {
    //         $months = $request->input('months', 6); // Default to 6 months if not specified in the request.
    //         // Call the service to get sales data based on the number of months.
    //         $salesData = $this->salesAnalyticsService->getSalesData($months);
    //         // Return the sales data in the response.
    //         return response()->json([

    //             'status' => 'success',
    //             'message' => 'Sales Analytics Data retrieved successfully',
    //             'data' => [
    //                 'salesAnalytics' => $salesData,
    //             ]
    //         ], 200);
    //     } catch (QueryException $e) {
    //         return $this->handleException($e);
    //     }
    // }


    protected function handleException(QueryException $e)
    {
        return response()->json([
            'status' => 'error',
            'message' => 'An error occurred while retrieving metrics.',
            'error' => $e->getMessage(),
        ], 500);
    }
}

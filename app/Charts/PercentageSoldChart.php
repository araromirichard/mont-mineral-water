<?php

namespace App\Charts;

use ArielMejiaDev\LarapexCharts\LarapexChart;
use App\Services\Admin\SalesAnalyticsService;

class PercentageSoldChart
{
    protected $donutchart;
    protected $salesAnalyticsService;

    public function __construct(LarapexChart $chart, SalesAnalyticsService $salesAnalyticsService)
    {
        $this->donutchart = $chart;
        $this->salesAnalyticsService = $salesAnalyticsService;
    }

    public function build(): array
    {
        // Get product quantities and names from the service
        $productQuantities = $this->salesAnalyticsService->getTotalQuantitySoldPerProduct();
        $productNames = $productQuantities->pluck('product_name')->toArray();
        $productQuantities = $productQuantities->pluck('total_quantity_sold')->toArray();

        // Calculate the total quantity sold
        $totalQuantitySold = array_sum($productQuantities);

        // Calculate the percentage for each product
        $percentageSold = [];
        foreach ($productQuantities as $quantity) {
            $percentageSold[] = ($quantity / $totalQuantitySold) * 100;
        }

        return $this->donutchart->donutChart()
            ->setTitle('Percentage Per Product')
            ->addData($percentageSold)
            ->setLabels($productNames)
            ->toVue();
    }
}

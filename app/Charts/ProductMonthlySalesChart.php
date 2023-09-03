<?php

namespace App\Charts;

use ArielMejiaDev\LarapexCharts\LarapexChart;
use App\Services\Admin\SalesAnalyticsService; // Import the SalesAnalyticsService class

class ProductMonthlySalesChart
{
    protected $chart;
    protected $salesDataService; // Add a property to hold the SalesAnalyticsService instance

    public function __construct(LarapexChart $chart, SalesAnalyticsService $salesDataService)
    {
        $this->chart = $chart;
        $this->salesDataService = $salesDataService; // Inject the SalesAnalyticsService
    }
    public function build(): array
    {
        // Retrieve monthly product sales data using the SalesAnalyticsService
        $monthlyProductSalesData = $this->salesDataService->getMonthlyProductSalesData();

        // Prepare data for the chart
        $xAxisLabels = []; // Array to store unique months
        $datasets = []; // Array to store datasets for each product

        // Organize the data for the chart
        foreach ($monthlyProductSalesData as $item) {

            $month = $item->month;
            $productName = $item->product_name; // Use product name instead of ID
            $quantitySold = $item->total_quantity_sold;

            // Add month to the X-axis labels if it's not already there
            if (!in_array($month, $xAxisLabels)) {
                $xAxisLabels[] = $month;
            }

            // Add quantity sold to the appropriate product dataset
            if (!isset($datasets[$productName])) {
                $datasets[$productName] = [ // Use product name as the key
                    'name' => $productName, // Set the product name as the dataset name
                    'data' => []
                ];
            }

            // Add quantity sold for this month to the product's dataset
            $datasets[$productName]['data'][] = $quantitySold;
        }

        // Sort the X-axis labels in chronological order
        sort($xAxisLabels);

        // Sort the datasets by product name (key)
        ksort($datasets);

        // Configure the chart
        return $this->chart->lineChart()
            ->setTitle('Monthly Product Sales')
            ->setXAxis($xAxisLabels)
            ->setDataset(array_values($datasets)) // Set the datasets
            ->toVue();
    }
}

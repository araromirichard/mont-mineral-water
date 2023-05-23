<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{


    public function index()
    {
        $products = Product::with('productImages')->get();

        $formattedProducts = $products->map(function ($product) {
            $firstImage = $product->productImages->first();

            return [
                'id' => $product->id,
                'name' => $product->name,
                'size' => $product->size,
                'price' => $product->price,
                'image' => $firstImage ? $firstImage->image_path : null,
            ];
        });

        return Inertia::render('Shop/Index', ['products' => $formattedProducts]);
    }

    public function showproduct($id)
    {
        $product = Product::with('productImages')->findOrFail($id);

        $formattedProduct = [
            'id' => $product->id,
            'name' => $product->name,
            'size' => $product->size,
            'price' => $product->price,
            'description' => $product->description,
            'images' => $product->productImages->pluck('image_path'),
        ];

        $otherProducts = Product::where('id', '<>', $id)
            ->with('productImages')
            ->get();

        $formattedOtherProducts = $otherProducts->map(function ($product) {
            $firstImage = $product->productImages->first();

            return [
                'id' => $product->id,
                'name' => $product->name,
                'size' => $product->size,
                'price' => $product->price,
                'image' => $firstImage ? $firstImage->image_path : null,
            ];
        });

        return Inertia::render('Shop/ProductDetails', [
            'product' => $formattedProduct,
            'otherProducts' => $formattedOtherProducts,
        ]);
    }
}

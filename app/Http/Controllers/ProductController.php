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
                'pack_size' => $product->pack_size,
                'price' => $product->price,
                'slug' => $product->slug,
                'image' => $firstImage ? $firstImage->image_path : null,
            ];
        });

        return Inertia::render('Shop/Index', ['products' => $formattedProducts]);
    }

    public function showproduct($product)
    {
        $product = Product::with('productImages')->where('slug', $product)->firstOrFail();

        $formattedProduct = [
            'id' => $product->id,
            'name' => $product->name,
            'size' => $product->size,
            'pack_size' => $product->pack_size,
            'price' => $product->price,
            'slug' => $product->slug,
            'description' => $product->description,
            'images' => $product->productImages->pluck('image_path'),
        ];

        $otherProducts = Product::where('slug', '<>', $product)
            ->with('productImages')
            ->get();

        $formattedOtherProducts = $otherProducts->map(function ($product) {
            $firstImage = $product->productImages->first();

            return [
                'id' => $product->id,
                'name' => $product->name,
                'size' => $product->size,
                'pack_size' => $product->pack_size,
                'price' => $product->price,
                'slug' => $product->slug,
                'image' => $firstImage ? $firstImage->image_path : null,
            ];
        });

        return Inertia::render('Shop/ProductDetails', [
            'product' => $formattedProduct,
            'otherProducts' => $formattedOtherProducts,
        ]);
    }


    public function fetchAllProducts()
    {
        $products = Product::with('productImages')->get();

        $formattedProducts = $products->map(function ($product) {
            $firstImage = $product->productImages->first();

            return [
                'id' => $product->id,
                'name' => $product->name,
                'size' => $product->size,
                'pack_size' => $product->pack_size,
                'slug' => $product->slug,
                'price' => $product->price,
                'image' => $firstImage ? $firstImage->image_path : null,
            ];
        });

        return response()->json($formattedProducts);
    }
}

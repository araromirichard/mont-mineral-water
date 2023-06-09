<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index(Request $request)
    {
        $perPage = $request->input('perPage') ?: 5;
        $search = $request->input('search');

        $products = Product::query()
            ->when($search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->with('productImages') // Include the product images using the relationship
            ->paginate($perPage)
            ->appends(['search' => $search, 'perPage' => $perPage]);

        $filters = [
            'search' => $search,
            'perPage' => $perPage,
        ];

        return Inertia::render('Product/Index', compact('products', 'filters'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'size' => 'required|string',
            'pack_size' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'images' => 'required|array',
            'image.*' => 'image|mimes:jpeg,png|max:5242880',
        ]);

        // Create a new product record
        $product = new Product();
        $product->name = $request->input('name');
        $product->size = $request->input('size');
        $product->pack_size = $request->input('pack_size');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->user_id = auth()->user()->id;
        $product->save();

        // Process and store product images
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $filename = $image->getClientOriginalName(); // Get the original filename
                $path = $image->storeAs('public/product_images', $filename); // Store the image in the public/product_images folder with the original filename

                // Remove 'public/' from the image path to make it accessible publicly
                $publicImagePath = str_replace('public/', '', $path);

                $productImage = new ProductImage();
                $productImage->product_id = $product->id;
                $productImage->image_path = $publicImagePath;
                $productImage->save();
            }
        }

        return redirect()->route('admin.products.index')
            ->with('success', 'Product created successfully.');
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::with('productImages')->findOrFail($id);

        $productImages = $product->productImages->map(function ($image) {
            return $image->image_path;
        });

        return Inertia::render('Product/show', [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'size' => $product->size,
                'pack_size' => $product->pack_size,
                'price' => $product->price,
                'product_images' => $productImages,
            ],
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::with('productImages')->findOrFail($id);

        $productImages = $product->productImages->map(function ($image) {
            return $image->image_path;
        });

        return Inertia::render('Product/Edit', [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'size' => $product->size,
                'pack_size' => $product->pack_size,
                'price' => $product->price,
                'product_images' => $productImages,
            ],
        ]);
    }


    /**
     * Update the specified resource in storage.
     */


    // ...

    // public function update(Request $request, string $id)
    // {
    //     $product = Product::findOrFail($id);

    //     $validatedData = $request->validate([
    //         'name' => 'required|string',
    //         'description' => 'required|string',
    //         'size' => 'required|string',
    //         'pack_size' => 'required|string',
    //         'price' => 'required|numeric',
    //     ]);

    //     if ($request->hasFile('images')) {
    //         $images = $request->file('images');

    //         $validatedImages = [];

    //         foreach ($images as $image) {
    //             // Manually validate each image
    //             if ($this->validateImage($image)) {
    //                 $validatedImages[] = $image;
    //             }
    //         }

    //         // Assign the validated images to the validated data
    //         $validatedData['images'] = $validatedImages;

    //         // Remove existing product images
    //         $product->productImages()->delete();
    //     }

    //     // Update the product
    //     $product->name = $validatedData['name'];
    //     $product->description = $validatedData['description'];
    //     $product->size = $validatedData['size'];
    //     $product->pack_size = $validatedData['pack_size'];
    //     $product->price = $validatedData['price'];
    //     $product->save();

    //     // Handle product images
    //     if ($request->hasFile('images')) {
    //         $images = $request->file('images');

    //         foreach ($images as $image) {
    //             $filename = $image->getClientOriginalName();
    //             $path = 'product_images/' . $filename;

    //             if (Storage::disk('public')->exists($path)) {
    //                 // Image already exists, replace it
    //                 Storage::disk('public')->delete($path);
    //             }

    //             $imagePath = $image->storeAs('product_images', $filename, 'public');

    //             $productImage = new ProductImage();
    //             $productImage->product_id = $product->id;
    //             $productImage->image_path = $imagePath;
    //             $productImage->save();
    //         }
    //     }

    //     return redirect()->route('admin.products.show', ['product' => $product->id])
    //         ->with('success', 'Product updated successfully.');
    // }


    public function update(Request $request, string $id)
    {
       
        $product = Product::findOrFail($id);

        $request->validate([
            'name' => 'required|string',
            'size' => 'required|string',
            'pack_size' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'images' => 'nullable|array',
            'images.*.*' => 'image|mimes:jpeg,png|max:5242880',
        ]);

        // Update the product fields
        $product->name = $request->input('name');
        $product->size = $request->input('size');
        $product->pack_size = $request->input('pack_size');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->save();

        dd($request->hasFile('images'));
        // Process and store product images
        if ($request->hasFile('images')) {
            
            dd($product->productImages());
            // Remove existing product images
            $product->productImages()->delete();

            // Process and store new product images
            foreach ($request->file('images') as $image) {
                if ($image->isValid()) {
                    $filename = $image->getClientOriginalName();
                    $path = $image->storeAs('public/product_images', $filename);

                    $publicImagePath = str_replace('public/', '', $path);

                    $productImage = new ProductImage();
                    $productImage->product_id = $product->id;
                    $productImage->image_path = $publicImagePath;
                    dd($productImage);
                    $productImage->save();
                }
            }
        }

        return redirect()->route('admin.products.show', ['product' => $product->id])
            ->with('success', 'Product updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::findOrFail($id);

        // Delete associated product images
        foreach ($product->productImages as $image) {
            Storage::disk('public')->delete($image->image_path);
            $image->delete();
        }

        // Delete the product
        $product->delete();

        return redirect()->route('admin.products.index')
            ->with('success', 'Product deleted successfully.');
    }


    // Custom image validation method
    private function validateImage($image)
    {
        // Perform your custom validation logic here
        // Return true if the image is valid, false otherwise

        if ($image->isValid() && in_array($image->getClientOriginalExtension(), ['jpg', 'jpeg', 'png'])) {
            return true;
        }

        return false;
    }
}

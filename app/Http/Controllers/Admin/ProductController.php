<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
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
            ->with('productImages')
            ->paginate($perPage)
            ->appends(['search' => $search, 'perPage' => $perPage]);

        $filters = compact('search', 'perPage');

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
        $validatedData = $request->validate($this->getValidationRules());

        $product = Product::create($validatedData);
        $this->updateSlug($product);

        $this->processProductImages($product, $request->file('images'));

        return redirect()->route('admin.products.index')
            ->with('success', 'Product created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::with('productImages')->findOrFail($id);
        $productImages = $product->productImages->pluck('image_path')->all();

        return Inertia::render('Product/Edit', compact('product', 'productImages'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::with('productImages')->findOrFail($id);

        $validatedData = $request->validate($this->getValidationRules($product->id));

        $product->update($validatedData);
        $this->updateSlug($product);

        if ($request->hasFile('images')) {
            $this->processProductImages($product, $request->file('images'));
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

        foreach ($product->productImages as $image) {
            Storage::disk('public')->delete($image->image_path);
            $image->delete();
        }

        $product->delete();

        return redirect()->route('admin.products.index')
            ->with('success', 'Product deleted successfully.');
    }

    private function getValidationRules($productId = null)
    {
        $rules = [
            'name' => 'required|string',
            'size' => 'required|string',
            'pack_size' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'images' => 'nullable|array',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ];

        if ($productId) {
            $rules['slug'] = ['required', 'string', Rule::unique('products')->ignore($productId)];
        } else {
            $rules['slug'] = 'required|string|unique:products';
        }

        return $rules;
    }

    private function updateSlug(Product $product)
    {
        $slug = Str::slug($product->name);
        $product->slug = $slug;
        $product->save();
    }

    private function processProductImages(Product $product, $imageFiles)
    {
        if ($imageFiles) {
            foreach ($imageFiles as $file) {
                $path = $file->store('products', 'public');

                $productImage = new ProductImage();
                $productImage->product_id = $product->id;
                $productImage->image_path = $path;
                $productImage->save();
            }
        }
    }
}

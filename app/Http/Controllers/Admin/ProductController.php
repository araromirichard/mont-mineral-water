<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    public function store(StoreProductRequest $request)
    {
        $validatedData = $request->validated();

        $product = $this->createProduct($validatedData);

        return redirect()->route('admin.products.index')->with('success', 'Product created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = $this->findProductById($id);
        $productImages = $product->productImages->pluck('image_path')->all();

        return Inertia::render('Product/Edit', compact('product', 'productImages'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreProductRequest $request, string $id)
    {
        $product = $this->findProductById($id);
        $validatedData = $request->validated();

        $this->updateProduct($product, $validatedData, $request->file('images'));

        return redirect()->route('admin.products.show', ['product' => $product->id])->with('success', 'Product updated successfully.');
    }

    /**
     * Show the specified resource.
     */
    public function show(string $id)
    {
        $product = $this->findProductById($id);
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
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = $this->findProductById($id);
        $this->deleteProduct($product);

        return redirect()->route('admin.products.index')->with('success', 'Product deleted successfully.');
    }

    private function createProduct(array $data)
    {
        $product = new Product($data);
        $product->user()->associate(Auth::user());
        $product->save();
        $this->updateSlug($product);
        $this->processProductImages($product, request()->file('images'));
        return $product;
    }

    private function updateProduct(Product $product, array $data, $newImageFiles)
    {
        $product->fill($data);
        $this->updateSlug($product);

        if ($newImageFiles) {
            $this->updateProductImages($product, $newImageFiles);
        }

        $product->save();
    }

    private function findProductById(string $id)
    {
        return Product::with('productImages')->findOrFail($id);
    }

    private function deleteProduct(Product $product)
    {
        foreach ($product->productImages as $image) {
            Storage::disk('public')->delete($image->image_path);
            $image->delete();
        }

        $product->delete();
    }

    private function updateSlug(Product $product)
    {
        $slug = Str::slug($product->name);
        $product->slug = $slug;
        $product->save();
    }

    private function updateProductImages(Product $product, $newImageFiles)
    {
        foreach ($product->productImages as $image) {
            Storage::disk('public')->delete($image->image_path);
            $image->delete();
        }

        $this->processProductImages($product, $newImageFiles);
    }

    private function processProductImages(Product $product, $imageFiles)
    {
        if ($imageFiles) {
            foreach ($imageFiles as $file) {
                $uniqueFileName = 'product_' . time() . '_' . Str::random(10) . '.' . $file->getClientOriginalExtension();
                $file->storeAs('public/products', $uniqueFileName);
                $productImage = new ProductImage();
                $productImage->product_id = $product->id;
                $productImage->image_path = 'products/' . $uniqueFileName;
                $productImage->save();
            }
        }
    }
}

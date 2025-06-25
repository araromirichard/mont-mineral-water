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
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;

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


        // Transform each product to add product_images
        foreach ($products as $product) {
            $product->product_images = $product->productImages;
        }

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
        try {
            Log::info('Product store method called', [
                'request_data' => $request->except(['images']),
                'has_images' => $request->hasFile('images'),
                'images_count' => $request->hasFile('images') ? count($request->file('images')) : 0
            ]);

            $validatedData = $request->validated();

            DB::beginTransaction();

            $product = $this->createProduct($validatedData);

            Log::info('Product created successfully', [
                'product_id' => $product->id,
                'product_name' => $product->name
            ]);

            DB::commit();

            return redirect()->route('admin.products.index')->with('success', 'Product created successfully.');
        } catch (\Exception $e) {
            DB::rollBack();

            Log::error('Error creating product', [
                'error_message' => $e->getMessage(),
                'error_file' => $e->getFile(),
                'error_line' => $e->getLine(),
                'stack_trace' => $e->getTraceAsString()
            ]);

            return back()->withErrors(['error' => 'Failed to create product: ' . $e->getMessage()])->withInput();
        }
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::with('productImages')->findOrFail($id);
        //dd($product->productImages);
        // Format product images for the frontend with proper URLs
        $product->product_images = $product->productImages->map(function ($image) {
            return [
                'id' => $image->id,
                'image_path' => $image->image_path,
                // Use the public disk explicitly
                'url' => asset('storage/' . $image->image_path),
                'full_url' => asset('storage/' . $image->image_path),
                // Alternative URL construction
                'storage_url' => url('storage/' . $image->image_path),
            ];
        });

        // Debug: Log the image URLs to check if they're correct
        Log::info('Product images for edit:', [
            'product_id' => $product->id,
            'images' => $product->product_images->toArray(),
            'storage_disk_config' => config('filesystems.disks.public'),
            'app_url' => config('app.url'),
        ]);

        return Inertia::render('Product/Edit', compact('product'));
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            // Custom validation for update
            $request->validate([
                'name' => 'required|string|max:255',
                'size' => 'required|string|max:50',
                'pack_size' => 'required|string|max:100',
                'description' => 'required|string',
                'price' => 'required|numeric|min:0',
                'new_images' => 'nullable|array|max:10',
                'new_images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
                'removed_images' => 'nullable|array',
                'removed_images.*' => 'integer|exists:product_images,id'
            ]);

            $product = Product::with('productImages')->findOrFail($id);

            Log::info('Updating product', [
                'product_id' => $id,
                'has_new_images' => $request->hasFile('new_images'),
                'new_images_count' => $request->hasFile('new_images') ? count($request->file('new_images')) : 0,
                'removed_images' => $request->input('removed_images', [])
            ]);

            DB::beginTransaction();

            // Update basic product info
            $product->update([
                'name' => $request->name,
                'description' => $request->description,
                'size' => $request->size,
                'pack_size' => $request->pack_size,
                'price' => $request->price,
            ]);

            // Update slug
            $this->updateSlug($product);
            $product->save();

            // Handle removed images
            $removedImageIds = $request->input('removed_images', []);
            if (!empty($removedImageIds)) {
                $this->removeSpecificImages($removedImageIds);
            }

            // Handle new images
            if ($request->hasFile('new_images')) {
                $this->processProductImages($product, $request->file('new_images'));
            }

            DB::commit();

            Log::info('Product updated successfully', [
                'product_id' => $product->id
            ]);

            return redirect()->route('admin.products.index')->with('success', 'Product updated successfully.');
        } catch (\Exception $e) {
            DB::rollBack();

            Log::error('Error updating product', [
                'product_id' => $id,
                'error_message' => $e->getMessage(),
                'error_file' => $e->getFile(),
                'error_line' => $e->getLine()
            ]);

            return back()->withErrors(['error' => 'Failed to update product: ' . $e->getMessage()])->withInput();
        }
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
        try {
            $product = $this->findProductById($id);

            Log::info('Starting product deletion', [
                'product_id' => $product->id,
                'product_name' => $product->name,
                'images_count' => $product->productImages->count()
            ]);

            DB::beginTransaction();

            $this->deleteProduct($product);

            DB::commit();

            Log::info('Product deleted successfully', [
                'product_id' => $id
            ]);

            return redirect()->route('admin.products.index')->with('success', 'Product deleted successfully.');
        } catch (\Exception $e) {
            DB::rollBack();

            Log::error('Error deleting product', [
                'product_id' => $id,
                'error_message' => $e->getMessage(),
                'error_file' => $e->getFile(),
                'error_line' => $e->getLine()
            ]);

            return back()->withErrors(['error' => 'Failed to delete product: ' . $e->getMessage()]);
        }
    }

    /**
     * Remove specific images by their IDs
     */
    private function removeSpecificImages(array $imageIds)
    {
        try {
            $images = ProductImage::whereIn('id', $imageIds)->get();

            foreach ($images as $image) {
                Log::info('Removing specific image', [
                    'image_id' => $image->id,
                    'image_path' => $image->image_path
                ]);

                // Delete the physical file
                $this->deleteImageFile($image->image_path);

                // Delete the database record
                $image->delete();
            }

            Log::info('Specific images removed', [
                'removed_count' => count($images),
                'image_ids' => $imageIds
            ]);
        } catch (\Exception $e) {
            Log::error('Error removing specific images', [
                'image_ids' => $imageIds,
                'error' => $e->getMessage()
            ]);
            throw $e;
        }
    }

    private function createProduct(array $data)
    {
        Log::info('Creating product with data', [
            'data' => Arr::except($data, ['images'])
        ]);

        // Create the product
        $product = new Product();
        $product->name = $data['name'];
        $product->description = $data['description'] ?? '';
        $product->size = $data['size'];
        $product->pack_size = $data['pack_size'];
        $product->price = $data['price'];
        $product->user_id = Auth::id();

        // Generate slug
        $slug = Str::slug($data['name']);
        $originalSlug = $slug;
        $counter = 1;

        while (Product::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        $product->slug = $slug;
        $product->save();

        Log::info('Product saved successfully', [
            'product_id' => $product->id,
            'slug' => $product->slug
        ]);

        // Process images if they exist
        if (request()->hasFile('images')) {
            Log::info('Processing product images', [
                'images_count' => count(request()->file('images'))
            ]);

            $this->processProductImages($product, request()->file('images'));
        }

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

    /**
     * Enhanced delete product method with comprehensive image cleanup
     */
    private function deleteProduct(Product $product)
    {
        $deletedImages = [];
        $failedDeletions = [];

        // Get all product images before deletion
        $productImages = $product->productImages;

        Log::info('Deleting product images', [
            'product_id' => $product->id,
            'total_images' => $productImages->count()
        ]);

        foreach ($productImages as $image) {
            try {
                $imagePath = $image->image_path;

                // Check multiple possible locations for the image
                $possiblePaths = [
                    $imagePath,                           // Original path: products/filename.jpg
                    'public/' . $imagePath,               // public/products/filename.jpg
                    'storage/' . $imagePath,              // storage/products/filename.jpg
                    'app/public/' . $imagePath,           // app/public/products/filename.jpg
                ];

                $imageDeleted = false;

                // Try to delete from storage disk first (recommended approach)
                if (Storage::disk('public')->exists($imagePath)) {
                    Storage::disk('public')->delete($imagePath);
                    $imageDeleted = true;
                    Log::info('Image deleted from public disk', ['path' => $imagePath]);
                }

                // Also check and delete from other possible locations
                foreach ($possiblePaths as $path) {
                    $fullPath = storage_path('app/' . $path);
                    if (File::exists($fullPath)) {
                        File::delete($fullPath);
                        $imageDeleted = true;
                        Log::info('Image deleted from file system', ['path' => $fullPath]);
                    }
                }

                // Check in public storage symlink
                $publicPath = public_path('storage/' . $imagePath);
                if (File::exists($publicPath)) {
                    File::delete($publicPath);
                    $imageDeleted = true;
                    Log::info('Image deleted from public symlink', ['path' => $publicPath]);
                }

                if ($imageDeleted) {
                    $deletedImages[] = $imagePath;
                } else {
                    $failedDeletions[] = $imagePath;
                    Log::warning('Image file not found in any location', [
                        'image_path' => $imagePath,
                        'checked_paths' => $possiblePaths
                    ]);
                }

                // Delete the database record
                $image->delete();
            } catch (\Exception $e) {
                $failedDeletions[] = $image->image_path;
                Log::error('Failed to delete image', [
                    'image_path' => $image->image_path,
                    'error' => $e->getMessage()
                ]);
            }
        }

        // Delete the product
        $product->delete();

        Log::info('Product deletion completed', [
            'product_id' => $product->id,
            'deleted_images' => $deletedImages,
            'failed_deletions' => $failedDeletions,
            'total_deleted' => count($deletedImages),
            'total_failed' => count($failedDeletions)
        ]);

        // If there were failed deletions, you might want to handle this
        if (!empty($failedDeletions)) {
            Log::warning('Some images could not be deleted', [
                'product_id' => $product->id,
                'failed_images' => $failedDeletions
            ]);
        }
    }

    private function updateSlug(Product $product)
    {
        $slug = Str::slug($product->name);
        $originalSlug = $slug;
        $counter = 1;

        while (Product::where('slug', $slug)->where('id', '!=', $product->id)->exists()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        $product->slug = $slug;
    }

    /**
     * Enhanced update product images with proper cleanup
     */
    private function updateProductImages(Product $product, $newImageFiles)
    {
        // Delete old images first
        foreach ($product->productImages as $image) {
            $this->deleteImageFile($image->image_path);
            $image->delete();
        }

        // Add new images
        $this->processProductImages($product, $newImageFiles);
    }


    private function processProductImages(Product $product, $imageFiles)
    {
        try {
            if ($imageFiles && is_array($imageFiles)) {
                Log::info('Processing images', [
                    'product_id' => $product->id,
                    'images_count' => count($imageFiles)
                ]);

                foreach ($imageFiles as $index => $file) {
                    if ($file && $file->isValid()) {
                        Log::info('Processing image file', [
                            'index' => $index,
                            'original_name' => $file->getClientOriginalName(),
                            'size' => $file->getSize(),
                            'mime_type' => $file->getMimeType()
                        ]);

                        $uniqueFileName = 'product_' . time() . '_' . Str::random(10) . '.' . $file->getClientOriginalExtension();

                        // Store the file
                        $path = $file->storeAs('public/products', $uniqueFileName);

                        Log::info('File stored successfully', [
                            'path' => $path,
                            'unique_filename' => $uniqueFileName
                        ]);

                        // Create product image record
                        $productImage = new ProductImage();
                        $productImage->product_id = $product->id;
                        $productImage->image_path = 'products/' . $uniqueFileName;
                        $productImage->save();

                        Log::info('Product image record created', [
                            'product_image_id' => $productImage->id,
                            'image_path' => $productImage->image_path
                        ]);
                    } else {
                        Log::warning('Invalid image file', [
                            'index' => $index,
                            'file_valid' => $file ? $file->isValid() : 'null'
                        ]);
                    }
                }
            } else {
                Log::info('No images to process', [
                    'imageFiles_type' => gettype($imageFiles),
                    'imageFiles_empty' => empty($imageFiles)
                ]);
            }
        } catch (\Exception $e) {
            Log::error('Error processing product images', [
                'product_id' => $product->id,
                'error_message' => $e->getMessage(),
                'error_file' => $e->getFile(),
                'error_line' => $e->getLine()
            ]);
            throw $e;
        }
    }

    /**
     * Helper method to delete a single image file
     */
    private function deleteImageFile($imagePath)
    {
        try {
            // Delete from storage disk
            if (Storage::disk('public')->exists($imagePath)) {
                Storage::disk('public')->delete($imagePath);
                Log::info('Single image deleted from storage', ['path' => $imagePath]);
            }

            // Delete from public symlink if exists
            $publicPath = public_path('storage/' . $imagePath);
            if (File::exists($publicPath)) {
                File::delete($publicPath);
                Log::info('Single image deleted from public path', ['path' => $publicPath]);
            }
        } catch (\Exception $e) {
            Log::error('Failed to delete single image file', [
                'image_path' => $imagePath,
                'error' => $e->getMessage()
            ]);
        }
    }

    /**
     * Clean up orphaned image files (optional utility method)
     * This method can be called periodically to clean up files that exist in storage
     * but don't have corresponding database records
     */
    public function cleanupOrphanedImages()
    {
        try {
            $storageFiles = Storage::disk('public')->files('products');
            $dbImagePaths = ProductImage::pluck('image_path')->toArray();

            $orphanedFiles = [];

            foreach ($storageFiles as $file) {
                // Remove 'public/' prefix if present for comparison
                $cleanPath = str_replace('public/', '', $file);

                if (!in_array($cleanPath, $dbImagePaths)) {
                    $orphanedFiles[] = $file;
                    Storage::disk('public')->delete($file);
                }
            }

            Log::info('Orphaned images cleanup completed', [
                'total_files_checked' => count($storageFiles),
                'orphaned_files_deleted' => count($orphanedFiles),
                'deleted_files' => $orphanedFiles
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Cleanup completed',
                'deleted_count' => count($orphanedFiles)
            ]);
        } catch (\Exception $e) {
            Log::error('Error during orphaned images cleanup', [
                'error' => $e->getMessage()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Cleanup failed: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get storage info for debugging
     */
    public function getStorageInfo()
    {
        try {
            $publicDisk = Storage::disk('public');
            $productFiles = $publicDisk->files('products');

            $storageInfo = [
                'storage_path' => storage_path('app/public'),
                'public_path' => public_path('storage'),
                'symlink_exists' => is_link(public_path('storage')),
                'products_directory_exists' => $publicDisk->exists('products'),
                'total_product_images' => count($productFiles),
                'product_files' => $productFiles,
                'database_images_count' => ProductImage::count(),
                'storage_disk_config' => config('filesystems.disks.public')
            ];

            Log::info('Storage info retrieved', $storageInfo);

            return response()->json($storageInfo);
        } catch (\Exception $e) {
            Log::error('Error getting storage info', [
                'error' => $e->getMessage()
            ]);

            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

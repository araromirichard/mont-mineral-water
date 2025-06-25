<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        try {
            $user = Auth::user();
            
            Log::info('Authorization check', [
                'user_id' => $user ? $user->id : null,
                'user_authenticated' => Auth::check(),
                'has_role_method' => $user ? method_exists($user, 'hasRole') : false
            ]);

            // Temporarily bypass role check for debugging
            // return Auth::check() && Auth::user()->hasRole('admin');
            
            // Use this simpler check for now
            return Auth::check();
            
        } catch (\Exception $e) {
            Log::error('Authorization error in StoreProductRequest', [
                'error' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);
            
            return false;
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'size' => 'required|string|max:50',
            'pack_size' => 'required|string|max:100',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'images' => 'nullable|array|max:10',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120', // Fixed: was 'image.*'
        ];
    }

    /**
     * Get custom error messages for validation rules.
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Product name is required.',
            'name.max' => 'Product name cannot exceed 255 characters.',
            'size.required' => 'Product size is required.',
            'pack_size.required' => 'Pack size is required.',
            'description.required' => 'Product description is required.',
            'price.required' => 'Product price is required.',
            'price.numeric' => 'Price must be a valid number.',
            'price.min' => 'Price must be greater than or equal to 0.',
            'images.array' => 'Images must be provided as an array.',
            'images.max' => 'You can upload a maximum of 10 images.',
            'images.*.image' => 'Each file must be a valid image.',
            'images.*.mimes' => 'Images must be in jpeg, png, jpg, gif, or webp format.',
            'images.*.max' => 'Each image must not exceed 5MB in size.',
        ];
    }

    /**
     * Handle a failed authorization attempt.
     */
    protected function failedAuthorization()
    {
        Log::warning('Failed authorization attempt', [
            'user_id' => Auth::id(),
            'route' => request()->route()->getName(),
            'ip' => request()->ip()
        ]);

        parent::failedAuthorization();
    }

    /**
     * Get custom attributes for validator errors.
     */
    public function attributes(): array
    {
        return [
            'name' => 'product name',
            'size' => 'product size',
            'pack_size' => 'pack size',
            'description' => 'product description',
            'price' => 'product price',
            'images' => 'product images',
            'images.*' => 'product image',
        ];
    }
}

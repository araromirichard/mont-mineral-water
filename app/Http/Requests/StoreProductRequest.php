<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check() && Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'size' => 'required|string',
            'pack_size' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'images' => 'nullable|array',
            'image.*' => 'image|mimes:jpeg,png|max:5242880',
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'images' => $this->productImages->map(function ($image) {
                return [,
                    'url' => asset('storage/' . $image->filename),
                ];
            }),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'links' => $this->resource->toArray()['links'], // Include the pagination links
        ];
    }
}

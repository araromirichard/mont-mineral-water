<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShippingAddress extends Model
{
    protected $fillable = [
        'user_id',
        'address',
        'apartment',
        'contact',
        'region',
        'district',
        'is_default',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

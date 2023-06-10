<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['user_id', 'status', 'order_number', 'subtotal', 'delivery', 'total'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }


    public function getShippingAddressAttribute()
    {
        return $this->user->shippingAddress;
    }

    // access the created_at attribute of an instance of the Order model in a human formatted value
    public function getCreatedAtAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->diffForHumans();
    }
}

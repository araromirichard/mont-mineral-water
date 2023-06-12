<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mont - New Order Placed</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <div class="text-center mb-8">
            <a href="{{ route('/') }}">
                <img src="{{ asset('/appLogo.png') }}" class="mx-auto max-w-xs" alt="Mont Logo">
            </a>
        </div>

        <div class="bg-white rounded-lg shadow-lg px-8 py-6 mb-8">
            <h1 class="text-2xl font-bold mb-4">New Order Placed</h1>
            <p class="text-lg mb-6">A new order has been placed by {{ $mailObj['user']['first_name'] }}
                {{ $mailObj['user']['last_name'] }}.</p>

            <h2 class="text-xl font-bold mb-4">Order Details:</h2>
            <table class="w-full mb-6">
                <tr>
                    <th class="py-2">Order ID:</th>
                    <td class="py-2">{{ $mailObj['order_number'] }}</td>
                </tr>
                <tr>
                    <th class="py-2">Order Total:</th>
                    <td class="py-2">{{ $mailObj['order_total'] }}</td>
                </tr>
                <tr>
                    <th class="py-2">Order Items:</th>
                    <td class="py-2">
                        <table class="w-full">
                            @foreach($mailObj['orderItems'] as $orderItem)
                            <tr>
                                <td class="pr-4">{{ $orderItem['product_name'] }}</td>
                                <td class="pr-4">Quantity: {{ $orderItem['quantity'] }}</td>
                                <td>Price: GHS{{ $orderItem['price'] }}</td>
                            </tr>
                            @endforeach
                        </table>
                    </td>
                </tr>
            </table>

            <h2 class="text-xl font-bold mb-4 mt-6">User Details:</h2>
            <table class="w-full">
                <tr>
                    <th class="py-2">Name:</th>
                    <td class="py-2">{{ $mailObj['user']['first_name'] }} {{ $mailObj['user']['last_name'] }}</td>
                </tr>
                <tr>
                    <th class="py-2">Email:</th>
                    <td class="py-2">{{ $mailObj['user']['email'] }}</td>
                </tr>
                <tr>
                    <th class="py-2">Address:</th>
                    <td class="py-2">{{ $mailObj['shippingAddress']['address'] }}</td>
                </tr>
                <tr>
                    <th class="py-2">Apartment:</th>
                    <td class="py-2">{{ $mailObj['shippingAddress']['apartment'] }}</td>
                </tr>
                <tr>
                    <th class="py-2">Region:</th>
                    <td class="py-2">{{ $mailObj['shippingAddress']['region'] }}</td>
                </tr>
                <tr>
                    <th class="py-2">District:</th>
                    <td class="py-2">{{ $mailObj['shippingAddress']['district'] }}</td>
                </tr>
            </table>
        </div>

        <div class="text-center text-sm text-gray-600">
            <p>&copy; 2023 Mont Mineral Water. All rights reserved.</p>
        </div>
    </div>
</body>

</html>

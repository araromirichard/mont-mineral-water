<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mont - Order Status Updated</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8 w-full h-full">
        <div class="text-center mb-8">
            <a href="{{ route('homepage') }}">
                <img src="{{ asset('appLogo.png') }}" class="mx-auto max-w-xs" alt="Mont Logo">
            </a>
        </div>
        <div class="bg-white rounded-lg shadow-lg px-8 py-6 mb-8">
            <h1 class="text-2xl font-bold mb-4">Order Status </h1>
            @if ($newStatus === 'approved')
            <p class="text-lg mb-6">hello!, Your order is enroute and will be delivered soon. Please see details of
                order below</p>
            @elseif($newStatus === 'cancelled')
            <p class="text-lg mb-6">hello!, Your order was cancelled. Please see details of order below</p>
            @elseif($newStatus === 'fulfilled')
            <p class="text-lg mb-6">hello!, Your order was delivered. Please see details of order below</p>
            <p class="text-lg mb-6">Please, contact the Mont for any complaints, <br> <strong>Thanks for trusting Mont! and Remember, Dont Drink alone</strong> </p>
            @else
            <p class="text-lg mb-6">hello!, Your order is Processing. Please see details of order below</p>
            @endif


            <h2 class="text-xl font-bold mb-4">Order Details:</h2>
            <table class="w-full mb-6">
                <tr>
                    <th class="py-2">Order Number:</th>
                    <td class="py-2">{{ $orderNumber }}</td>
                </tr>
                <tr>
                    <th class="py-2">New Status:</th>
                    <td class="py-2">{{ $newStatus }}</td>
                </tr>
            </table>
        </div>

        <div class="text-center text-sm text-gray-600">
            <p>&copy; 2023 Mont Mineral Water. All rights reserved.</p>
        </div>
    </div>
</body>

</html>
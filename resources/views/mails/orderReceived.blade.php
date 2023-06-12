<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Mont</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        @media only screen and (max-width: 600px) {
            .inner-body {
                width: 100% !important;
            }

            .footer {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 500px) {
            .button {
                width: 100% !important;
            }
        }
    </style>
</head>

<body class="bg-white text-gray-700 font-sans"
    style="box-sizing: border-box; position: relative; -webkit-text-size-adjust: none;">
    <div class="container mx-auto px-4 py-8">
        <div class="text-center mb-8">
            <a href="{{ route('/') }}">
                <img src="{{ asset('/appLogo.png') }}" class="mx-auto max-w-xs" alt="Mont Logo">
            </a>
        </div>

        <table class="w-full" cellpadding="0" cellspacing="0" role="presentation">


            <tr>
                <td class="border-t border-b bg-gray-100">
                    <table class="inner-body mx-auto max-w-2xl" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                            <td class="px-4 py-8">
                                <h1 class="text-2xl font-bold mb-4">Order Received</h1>
                                <p class="text-base leading-relaxed mb-6">Your order has been placed.</p>
                                <p class="text-base leading-relaxed mb-6">A Mont representative will reach out to this
                                    number
                                    <strong>0864 36763 2633</strong> within 30 minutes.
                                </p>
                                <p class="text-base leading-relaxed mb-6">If you don't receive a call from us, please
                                    call
                                    us on
                                    <strong>+233 488947 89849</strong>.
                                </p>
                                <table class="mb-6 w-full border-collapse">
                                    <tr>
                                        <th class="border px-4 py-2">Item</th>
                                        <th class="border px-4 py-2">Quantity</th>
                                        <th class="border px-4 py-2">Price</th>
                                    </tr>
                                    @foreach($mailObj['orderItems'] as $orderItem)
                                    <tr>
                                        <td class="border px-4 py-2">{{ $orderItem['product_name'] }}</td>
                                        <td class="border px-4 py-2">{{ $orderItem['quantity'] }}</td>
                                        <td class="border px-4 py-2">GHS{{ $orderItem['price'] }}</td>
                                    </tr>
                                    @endforeach
                                </table>
                                <p class="text-base leading-relaxed mb-6">Order ID:
                                    <strong>
                                        {{ $mailObj['order_number'] }}
                                    </strong>
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td class="text-center py-6">
                    <p class="text-sm text-gray-600">© 2023 Mont Mineral Water. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mont - New Order Placed</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7fafc;
            color: #374151;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        .logo {
            max-width: 75px;
            height: auto;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .order-details {
            margin-bottom: 30px;
        }

        .order-details table {
            width: 100%;
            border-collapse: collapse;
        }

        .order-details th,
        .order-details td {
            padding: 10px;
            text-align: left;
        }

        .user-details table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 30px;
        }

        .user-details th,
        .user-details td {
            padding: 10px;
            text-align: left;
            vertical-align: top;
        }

        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            font-size: 14px;
            color: #68727a;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <a href="http://localhost">
                <img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
            </a>
        </div>

        <div class="order-details">
            <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">New Order Placed</h1>
            <p style="font-size: 16px; margin-bottom: 20px;">A new order has been placed by {{ $mailObj['user']['first_name'] }}
                {{ $mailObj['user']['last_name'] }}.</p>

            <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Order Details:</h2>
            <table>
                <tr>
                    <th>Order ID:</th>
                    <td>{{ $mailObj['order_number'] }}</td>
                </tr>
                <tr>
                    <th>Order Total:</th>
                    <td>{{ $mailObj['order_total'] }}</td>
                </tr>
                <tr>
                    <th>Order Items:</th>
                    <td>
                        <table>
                            @foreach($mailObj['orderItems'] as $orderItem)
                            <tr>
                                <td>{{ $orderItem['product_name'] }}</td>
                                <td>Quantity: {{ $orderItem['quantity'] }}</td>
                                <td>Price: GHS{{ $orderItem['price'] }}</td>
                            </tr>
                            @endforeach
                        </table>
                    </td>
                </tr>
            </table>

            <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px; margin-top: 30px;">User Details:</h2>
            <table class="user-details">
                <tr>
                    <th>Name:</th>
                    <td>{{ $mailObj['user']['first_name'] }} {{ $mailObj['user']['last_name'] }}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>{{ $mailObj['user']['email'] }}</td>
                </tr>
                <tr>
                    <th>Address:</th>
                    <td>{{ $mailObj['shippingAddress']['address'] }}</td>
                </tr>
                <tr>
                    <th>Apartment:</th>
                    <td>{{ $mailObj['shippingAddress']['apartment'] }}</td>
                </tr>
                <tr>
                    <th>Region:</th>
                    <td>{{ $mailObj['shippingAddress']['region'] }}</td>
                </tr>
                <tr>
                    <th>District:</th>
                    <td>{{ $mailObj['shippingAddress']['district'] }}</td>
                </tr>
            </table>
        </div>

        <div class="footer">
            <p>&copy; 2023 Mont Mineral Water. All rights reserved.</p>
        </div>
    </div>
</body>

</html>

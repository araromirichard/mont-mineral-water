<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mont - New Contact Enquiry</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8 w-full h-full">
        {{-- @dump($message) --}}
        <div class="text-center mb-8">
            <a href="{{ route('homepage') }}">
                <img src="{{ asset('/appLogo.png') }}" class="mx-auto max-w-xs" alt="Mont Logo">
            </a>
        </div>
        <div class="bg-white rounded-lg shadow-lg px-8 py-6 mb-8">
            <h1 class="text-2xl font-bold mb-4">New Contact Enquiry</h1>
            <p class="text-lg mb-6">A new contact enquiry has been received.</p>

            <h2 class="text-xl font-bold mb-4">Enquiry Details:</h2>
            <table class="w-full mb-6">
                <tr>
                    <th class="py-2">Name:</th>
                    <td class="py-2">{{ $name }}</td>
                </tr>
                <tr>
                    <th class="py-2">Email:</th>
                    <td class="py-2">{{ $email }}</td>
                </tr>
                <tr>
                    <th class="py-2">Message:</th>
                    <td class="py-2">{{ $messageBody }}</td>
                </tr>
            </table>
        </div>

        <div class="text-center text-sm text-gray-600">
            <p>&copy; 2023 Mont Mineral Water. All rights reserved.</p>
        </div>
    </div>
</body>

</html>
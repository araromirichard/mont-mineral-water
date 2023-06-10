<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to YourApp</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #4A5568;
            line-height: 1.4;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px;
        }

        .title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
        }

        .text {
            margin-bottom: 15px;
        }

        .button {
            display: inline-block;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            text-decoration: none;
            background-color: #4299e1;
            color: #FFFFFF;
            border-radius: 4px;
        }

        .button:hover {
            background-color: #3182ce;
        }

        @media only screen and (max-width: 600px) {
            .container {
                padding: 20px;
            }

            .title {
                font-size: 20px;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <h1 class="title">Welcome to Mont!</h1>
        <p class="text">Hello,</p>
        <p class="text">Welcome to Mont! Your account has been created with the following credentials:</p>
        <p class="text"><strong>Email:</strong> {{ $email }}</p>
        <p class="text"><strong>Password:</strong> {{ $password }}</p>
        <p class="text">Please log in to your account and change your password for security reasons.</p>
        <p class="text">Thank you!</p>

        <a href="{{ route('dashboard') }}" class="button">Go to Dashboard</a>
    </div>
</body>

</html>
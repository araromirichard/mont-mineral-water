##Mont E-Commerce Application

Overview

Mont is an e-commerce application built using Laravel Inertia and Vue.js. It provides a platform for users to browse and purchase products online.

Features

User Authentication: Allows users to sign up, log in, and manage their account.
Product Catalog: Displays a list of available products with details such as name, price, description, and images.
Shopping Cart: Enables users to add products to their cart, update quantities, and proceed to checkout.
Checkout Process: Guides users through the checkout process, including address entry, shipping options, and payment.
Order Management: Allows users to view their order history and track the status of their orders.
Admin Panel: Provides administrators with access to manage products, orders, and users.
Roles and Permissions: Implements role-based access control (RBAC) using Spatie's Laravel Permissions package.
Installation

Clone the repository: git clone https://github.com/your-username/mont.git
Install dependencies: composer install && npm install
Set up your environment variables: Rename .env.example to .env and configure database settings.
Generate application key: php artisan key:generate
Migrate and seed the database: php artisan migrate --seed
Compile assets: npm run dev (or npm run prod for production)
Usage

Start the development server: php artisan serve
Access the application in your web browser at http://localhost:8000
Log in as an admin using the default credentials:
Email: admin@example.com
Password: password
Explore the application, add products, place orders, etc.
Use the admin panel to manage roles and permissions for users.
Roles and Permissions

Roles: Define roles such as Admin, User, and Moderator using php artisan permission:create-role role-name.
Example: php artisan permission:create-role admin
Example: php artisan permission:create-role user
Permissions: Assign permissions to roles, such as managing products, orders, and users.
Middleware: Protect routes using Spatie's middleware to ensure only authorized users can access them.
Contributing

Fork the repository.
Create a new branch: git checkout -b feature/new-feature
Make your changes and commit them: git commit -m 'Add new feature'
Push to the branch: git push origin feature/new-feature
Submit a pull request.
Credits

Laravel: https://laravel.com/
Inertia.js: https://inertiajs.com/
Vue.js: https://vuejs.org/
Spatie Laravel Permissions: https://spatie.be/docs/laravel-permission
License

This project is licensed under the MIT License.



(https://opensource.org/licenses/MIT).
# mont-mineral-water

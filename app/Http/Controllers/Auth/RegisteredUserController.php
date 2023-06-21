<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|string|max:20', // add phone validation rule here
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        $adminEmail = 'krobotechies@gmail.com';
        $userRole = Role::where('name', 'user')->first();
        $adminRole = Role::where('name', 'admin')->first();
        
        
        // check to see if the auth user has an admin email and then assign role

        if ($user->email === $adminEmail && $adminRole) {
            $user->assignRole($adminRole);
        } else {
            $user->assignRole($userRole);
        }

        event(new Registered($user));
        $user->sendEmailVerificationNotification();

        Auth::login($user);
        $firstName = $user->first_name;

        // Flash a success message to display after the redirect
        session()->flash('success', 'Welcome, ' . $firstName . '!');

        if ($user->hasRole('admin')) {
            return redirect()->intended(RouteServiceProvider::HOME_ADMIN);
        }

        return redirect(RouteServiceProvider::HOME)
            ->with('success', 'A notification has been sent. Please check your email to verify your account.');
    }
}

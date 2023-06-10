<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeEmail;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }


    public function callback()
    {
        try {
            $google_user = Socialite::driver('google')->user();

            $user = User::where('email', $google_user->getEmail())->first();

            if (!$user) {
                $password = 'password';

                // Create a new user using the $google_user data
                $name = $google_user->getName();
                $nameParts = explode(' ', $name);
                $first_name = $nameParts[0];
                $last_name = $nameParts[1] ?? '';

                $new_user = new User();
                $new_user->first_name = $first_name;
                $new_user->last_name = $last_name;
                $new_user->email = $google_user->getEmail();
                $new_user->google_id = $google_user->getId();
                $new_user->phone = '';
                $new_user->password = bcrypt($password);
                $new_user->email_verified_at = now(); // Set the email verification to now
                // dd($new_user);
                $new_user->save();

                // Send the welcome email
                Mail::to($new_user->email)->send(new WelcomeEmail($new_user->email, $password));

                Auth::login($new_user);

                // Flash a success message to display after the redirect
                session()->flash('success', 'Welcome, ' . $first_name . '!');

                if ($user->hasRole('admin')) {
                    return redirect()->intended(RouteServiceProvider::HOME_ADMIN);
                }

                return redirect(RouteServiceProvider::HOME)->with('success', 'Welcome to YourApp!');
            } else {
                Auth::login($user);

                // Flash a success message to display after the redirect
                session()->flash('success', 'Welcome Back!');

                if ($user->hasRole('admin')) {
                    return redirect()->intended(RouteServiceProvider::HOME_ADMIN);
                }

                return redirect(RouteServiceProvider::HOME);
            }
        } catch (\Throwable $th) {
            $errorMessage = 'Something went wrong: ' . $th->getMessage();
            return redirect('/login')->with('error', $errorMessage);
        }
    }
}

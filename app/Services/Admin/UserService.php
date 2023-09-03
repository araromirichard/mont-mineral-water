<?php

namespace App\Services\Admin;

use App\Models\User;
use Carbon\Carbon;

class UserService
{
    public function getUserMetrics()
    {
        $verifiedUsersCount = User::whereNotNull('email_verified_at')->count();
        $unverifiedUsersCount = User::whereNull('email_verified_at')->count();
        $totalUsersCount = User::count();

        return [
            'verifiedUsersCount' => $verifiedUsersCount,
            'unverifiedUsersCount' => $unverifiedUsersCount,
            'totalUsersCount' => $totalUsersCount,
        ];
    }
    public function retrieveLast5Users()
    {

        // Retrieve the last 5 users and format created_at
        $last5Users = User::orderBy('created_at', 'desc')->take(5)->get();
        $last5Users->transform(function ($user) {
            $user->created_at = Carbon::parse($user->created_at)->diffForHumans();
            // dd($user);
            return $user;
        });
        return $last5Users;
    }
}

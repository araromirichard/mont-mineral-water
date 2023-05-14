<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $sharedData = parent::share($request);
        
        $sharedData['csrf_token'] = csrf_token();

        // Add the user and Ziggy data to the shared data array
        $sharedData['auth'] = [
            'user' => $request->user(),
        ];
        $sharedData['is_admin'] = [
            'is_admin' => $request->user() ? $request->user()->hasRole('admin') : false,
        ];
        $sharedData['ziggy'] = function () use ($request) {
            return array_merge((new Ziggy)->toArray(), [
                'location' => $request->url(),
            ]);
        };

        // Add all types of flashed messages to the flash array
        $sharedData['flash'] = [
            'toast' => [
                'success' => $request->session()->get('success') ?? null,
                'error' => $request->session()->get('error') ?? null,
                'info' => $request->session()->get('info') ?? null,
            ],
        ];

        return $sharedData;
    }
}

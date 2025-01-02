<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {

    // for user
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });
        RateLimiter::for('users-login-register-limiter', function (Request $request) {
            return Limit::perMinute(5)->by($request->ip());
        });
        RateLimiter::for('users-login-register-confirm-limiter', function (Request $request) {
            return Limit::perMinute(5)->by(url()->current() . $request->ip());
        });
        RateLimiter::for('users-login-register-resend-otp-limiter', function (Request $request) {
            return Limit::perMinute(5)->by(url()->current() . $request->ip());
        });



        // for doctor
        RateLimiter::for('dr-login-register-limiter', function (Request $request) {
            return Limit::perMinute(5)->by($request->ip());
        });

        RateLimiter::for('dr-login-confirm-limiter', function (Request $request) {
            return Limit::perMinute(5)->by(url()->current() . $request->ip());
        });

        RateLimiter::for('dr-login-resend-otp-limiter', function (Request $request) {
            return Limit::perMinute(5)->by(url()->current() . $request->ip());
        });

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/web.php'));
        });
    }
}

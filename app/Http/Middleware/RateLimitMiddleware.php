<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Symfony\Component\HttpFoundation\Response;

class RateLimitMiddleware
{
    public function handle(Request $request, Closure $next, $limiter)
    {
        // Create unique keys for IP and URL rate limiting
        $ipKey = $limiter . '-ip:' . $request->ip();
        $urlKey = $limiter . '-url:' . $request->url();

        // Check IP rate limit
        if (RateLimiter::tooManyAttempts($ipKey, 3)) { // 3 attempts max
            $seconds = (int) RateLimiter::availableIn($ipKey);

            return response()->json([
                'success' => false,
                'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً ' . $seconds . ' ثانیه دیگر صبر کنید.',
                'remaining_time' => $seconds // زمان باقی‌مانده به ثانیه
            ], Response::HTTP_TOO_MANY_REQUESTS); // 429 status code
        }

        // Check URL rate limit
        if (RateLimiter::tooManyAttempts($urlKey, 3)) { // 3 attempts max
            $seconds = (int) RateLimiter::availableIn($urlKey);

            return response()->json([
                'success' => false,
                'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً ' . $seconds . ' ثانیه دیگر صبر کنید.',
                'remaining_time' => $seconds // زمان باقی‌مانده به ثانیه
            ], Response::HTTP_TOO_MANY_REQUESTS); // 429 status code
        }

        // Increment attempts for IP and URL
        RateLimiter::hit($ipKey);
        RateLimiter::hit($urlKey);

        return $next($request);
    }
}
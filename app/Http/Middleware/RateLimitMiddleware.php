<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\RateLimiter;
use Symfony\Component\HttpFoundation\Response;

class RateLimitMiddleware
{
    public function handle(Request $request, Closure $next, string $limiter = 'default')
    {
        // Create unique keys for IP and URL rate limiting
        $ipKey = $limiter . '-ip:' . $request->ip();
        $urlKey = $limiter . '-url:' . $request->url();

        // Check IP rate limit
        if (RateLimiter::tooManyAttempts($ipKey, 3)) {
            $seconds = (int) RateLimiter::availableIn($ipKey);
            Log::info('Remaining time for IP: ' . $seconds);

            return response()->json([
                'success' => false,
                'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً ' . $seconds . ' ثانیه دیگر صبر کنید.',
                'remaining_time' => $seconds
            ], Response::HTTP_TOO_MANY_REQUESTS);
        }

        // Check URL rate limit
        if (RateLimiter::tooManyAttempts($urlKey, 3)) {
            $seconds = (int) RateLimiter::availableIn($urlKey);
            Log::info('Remaining time for URL: ' . $seconds);

            return response()->json([
                'success' => false,
                'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً ' . $seconds . ' ثانیه دیگر صبر کنید.',
                'remaining_time' => $seconds
            ], Response::HTTP_TOO_MANY_REQUESTS);
        }

        // Increment attempts for IP and URL
        RateLimiter::hit($ipKey);
        RateLimiter::hit($urlKey);

        return $next($request);
    }
}
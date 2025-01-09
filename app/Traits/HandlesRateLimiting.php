<?php

namespace App\Traits;

use Illuminate\Support\Facades\RateLimiter;

trait HandlesRateLimiting
{
 protected function checkRateLimit($key, $maxAttempts = 5, $decayMinutes = 2)
 {
  if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {
   $seconds = RateLimiter::availableIn($key);
   return response()->json([
    'success' => false,
    'message' => 'شما بیش از حد تلاش کرده‌اید. لطفاً ' . $seconds . ' ثانیه دیگر صبر کنید.',
    'error_type' => 'rate_limit'
   ], 429);
  }

  RateLimiter::hit($key, $decayMinutes * 60);
  return null; // اگر محدودیت اعمال نشد، null برگردانید
 }
}
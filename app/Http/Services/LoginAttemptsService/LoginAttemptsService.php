<?php

namespace App\Http\Services\LoginAttemptsService;

use App\Models\Dr\LoginAttempt;

class LoginAttemptsService
{
 public function incrementLoginAttempt($doctorId, $mobile)
 {
  $attempt = LoginAttempt::firstOrCreate(
   ['mobile' => $mobile],
   [
    'doctor_id' => $doctorId,
    'attempts' => 0,
    'last_attempt_at' => null,
    'lockout_until' => null
   ]
  );

  // بررسی اینکه آیا قبلاً قفل شده است
  if ($attempt->lockout_until && $attempt->lockout_until > now()) {
   return false;
  }

  // افزایش تعداد تلاش‌ها
  $attempt->attempts++;
  $attempt->last_attempt_at = now();

  // اگر تعداد تلاش‌ها از حد مجاز بیشتر شد
  if ($attempt->attempts >= 3) {
   // محاسبه زمان قفل با افزایش تصاعدی
   $lockDuration = match ($attempt->attempts) {
    3 => 5,     // 5 دقیقه
    4 => 30,     // 30 دقیقه
    5 => 60,     // 20 دقیقه
    6 => 120,     // 40 دقیقه
    default => 240  // از 6 به بعد 120 دقیقه
   };

   $attempt->lockout_until = now()->addMinutes($lockDuration);
  }

  $attempt->save();
  return $attempt;
 }
 public function resetLoginAttempts($mobile)
 {
  $attempt = LoginAttempt::where('mobile', $mobile)->first();
  if ($attempt) {
   $attempt->update([
    'attempts' => 0,
    'last_attempt_at' => null,
    'lockout_until' => null
   ]);
  }
 }

 // متد برای بررسی اینکه آیا کاربر قفل شده است
 public function isLocked($mobile)
 {
  $attempt = LoginAttempt::where('mobile', $mobile)->first();

  return $attempt &&
   $attempt->lockout_until &&
   $attempt->lockout_until > now();
 }

 // متد برای دریافت زمان باقی‌مانده تا رفع قفل
 public function getRemainingLockTime($mobile)
 {
  $attempt = LoginAttempt::where('mobile', $mobile)->first();
  if ($attempt && $attempt->lockout_until && $attempt->lockout_until > now()) {
   return now()->diffInSeconds($attempt->lockout_until);
  }
  return 0;
 }
}
<?php
namespace App\Http\Middleware\Dr;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckCompleteProfile
{
 public function handle($request, Closure $next)
 {
  $doctor = Auth::guard('doctor')->user();

  // Check if the user is authenticated and if the profile is not completed
  if (Auth::guard('doctor')->check() && !$doctor->profile_completed) {
   // Allow access to the edit profile route
   if ($request->routeIs('dr-edit-profile')) {
    return $next($request);
   }

   // Redirect to the edit profile route
   return redirect()->route('dr-edit-profile')
    ->with('complete-profile', 'برای دسترسی به امکانات سایت لطفا ابتدا پروفایل خود را تکمیل کنید');
  }

  return $next($request);
 }
}
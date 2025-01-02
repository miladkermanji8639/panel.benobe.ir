<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class doctor
{
    protected $table = "doctors";

    public function handle(Request $request, Closure $next): Response
    {
        if (!Auth::guard('doctor')->check()) {
            return redirect()->to('http://localhost:3000/auth');
        }

        $doctor = Auth::guard('doctor')->user();
        
        // // بررسی وضعیت کاربر
        if ($doctor->status === 0) {
            return redirect()->to('http://localhost:3000/auth');
        }

        return $next($request);
    }
}

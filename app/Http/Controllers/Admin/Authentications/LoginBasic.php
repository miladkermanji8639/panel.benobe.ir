<?php

namespace App\Http\Controllers\Admin\authentications;

use Illuminate\Http\Request;
use App\Models\Admin\Manager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Admin\Controller;
use App\Http\Requests\Admin\Authentication\LoginRequest;

class LoginBasic extends Controller
{
  public function index()
  {
    $pageConfigs = ['myLayout' => 'blank'];
    return view('admin.content.authentications.auth-login-basic', ['pageConfigs' => $pageConfigs]);
  }
  public function login(LoginRequest $loginRequest)
  {
    // Find the manager by email
    $manager = Manager::where('email', $loginRequest['email'])->first();

    // Check if the manager exists
    if (!$manager) {
      // dd("hi");
      return redirect()->back()->with('error', 'کاربری با این ایمیل یافت نشد');
    }

    // Check if the password is correct
    if (!Hash::check($loginRequest['password'], $manager->password)) {
      return redirect()->back()->with('error', 'کلمه عبور وارد شده اشتباه است');
    }

    // Log in the manager using the 'manager' guard
    Auth::guard('manager')->login($manager);

    return redirect()->route('admin.index')->with('swal-success', 'شما با موفقیت به سایت وارد شدید');
  }
  public function logout()
  {
    Auth::guard('manager')->logout();
    return redirect()->route('auth-login-basic')->with('swal-success', 'شما با موفقیت از سایت خارج شدید');
  }
}

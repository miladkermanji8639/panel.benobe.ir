<?php

namespace App\Http\Controllers\Admin\authentications;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class ResetPasswordCover extends Controller
{
  public function index()
  {
    $pageConfigs = ['myLayout' => 'blank'];
    return view('admin.content.authentications.auth-reset-password-cover', ['pageConfigs' => $pageConfigs]);
  }
}

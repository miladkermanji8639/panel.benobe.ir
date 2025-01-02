<?php

namespace App\Http\Controllers\Admin\authentications;

use Illuminate\Http\Request;
use App\Http\Controllers\Admin\Controller;

class RegisterCover extends Controller
{
  public function index()
  {
    $pageConfigs = ['myLayout' => 'blank'];
    return view('admin.content.authentications.auth-register-cover', ['pageConfigs' => $pageConfigs]);
  }
}

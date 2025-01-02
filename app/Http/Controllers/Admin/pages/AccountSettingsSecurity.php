<?php

namespace App\Http\Controllers\Admin\pages;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class AccountSettingsSecurity extends Controller
{
  public function index()
  {
    return view('content.pages.pages-account-settings-security');
  }
}

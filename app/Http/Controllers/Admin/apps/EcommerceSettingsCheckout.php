<?php

namespace App\Http\Controllers\Admin\apps;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class EcommerceSettingsCheckout extends Controller
{
  public function index()
  {
    return view('content.apps.app-ecommerce-settings-checkout');
  }
}

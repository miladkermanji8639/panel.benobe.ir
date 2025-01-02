<?php

namespace App\Http\Controllers\Admin\form_layouts;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class StickyActions extends Controller
{
  public function index()
  {
    return view('content.form-layout.form-layouts-sticky');
  }
}

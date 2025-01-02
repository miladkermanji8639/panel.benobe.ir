<?php

namespace App\Http\Controllers\Admin\layouts;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class ContentNavbar extends Controller
{
  public function index()
  {
    return view('content.layouts-example.layouts-content-navbar');
  }
}

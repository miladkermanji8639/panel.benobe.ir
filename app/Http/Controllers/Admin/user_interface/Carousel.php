<?php

namespace App\Http\Controllers\Admin\user_interface;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class Carousel extends Controller
{
  public function index()
  {
    return view('content.user-interface.ui-carousel');
  }
}

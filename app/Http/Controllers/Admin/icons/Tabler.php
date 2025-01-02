<?php

namespace App\Http\Controllers\Admin\icons;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class Tabler extends Controller
{
  public function index()
  {
    return view('content.icons.icons-tabler');
  }
}

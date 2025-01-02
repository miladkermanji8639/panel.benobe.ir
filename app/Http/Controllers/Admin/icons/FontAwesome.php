<?php

namespace App\Http\Controllers\Admin\icons;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class FontAwesome extends Controller
{
  public function index()
  {
    return view('content.icons.icons-font-awesome');
  }
}

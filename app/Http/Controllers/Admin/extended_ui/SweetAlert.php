<?php

namespace App\Http\Controllers\Admin\extended_ui;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class SweetAlert extends Controller
{
  public function index()
  {
    return view('content.extended-ui.extended-ui-sweetalert2');
  }
}

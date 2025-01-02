<?php

namespace App\Http\Controllers\Admin\layouts;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class Vertical extends Controller
{
  public function index()
  {

    $pageConfigs = ['myLayout' => 'vertical'];

    return view('admin.content.dashboard.index', ['pageConfigs' => $pageConfigs]);
  }
}

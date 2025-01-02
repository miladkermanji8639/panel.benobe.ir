<?php

namespace App\Http\Controllers\Admin\layouts;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class Fluid extends Controller
{
  public function index()
  {
    $pageConfigs = ['contentLayout' => 'wide'];
    return view('content.layouts-example.layouts-fluid',['pageConfigs'=> $pageConfigs]);
  }
}

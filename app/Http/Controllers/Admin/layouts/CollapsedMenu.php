<?php

namespace App\Http\Controllers\Admin\layouts;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class CollapsedMenu extends Controller
{
  public function index()
  {

    $pageConfigs = ['menuCollapsed' => true];

    return view('content.layouts-example.layouts-collapsed-menu',['pageConfigs'=> $pageConfigs]);
  }
}

<?php

namespace App\Http\Controllers\Admin\layouts;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

use App\Helpers\Helpers;

class Horizontal extends Controller
{
  public function index()
  {

    $pageConfigs = ['myLayout' => 'horizontal'];

    return view('admin.content.dashboard.index',['pageConfigs'=> $pageConfigs]);
  }
}

<?php

namespace App\Http\Controllers\Admin\front_pages;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class HelpCenterArticle extends Controller
{
  public function index()
  {
    $pageConfigs = ['myLayout' => 'front'];
    return view('content.front-pages.help-center-article', ['pageConfigs' => $pageConfigs]);
  }
}

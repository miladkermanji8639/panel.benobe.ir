<?php

namespace App\Http\Controllers\Admin\pages;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class Faq extends Controller
{
  public function index()
  {
    return view('content.pages.pages-faq');
  }
}

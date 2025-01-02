<?php

namespace App\Http\Controllers\Admin\pages;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class UserProjects extends Controller
{
  public function index()
  {
    return view('content.pages.pages-profile-projects');
  }
}

<?php

namespace App\Http\Controllers\Admin\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Admin\Controller;

class Dashboard extends Controller
{
  public function index()
  {
    
    return view('admin.content.dashboard.index');

  }
}

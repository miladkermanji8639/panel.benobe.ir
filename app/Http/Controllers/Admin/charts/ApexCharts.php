<?php

namespace App\Http\Controllers\Admin\charts;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class ApexCharts extends Controller
{
  public function index()
  {
    return view('content.charts.charts-apex');
  }
}

<?php

namespace App\Http\Controllers\Admin\charts;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class ChartJs extends Controller
{
  public function index()
  {
    return view('content.charts.charts-chartjs');
  }
}

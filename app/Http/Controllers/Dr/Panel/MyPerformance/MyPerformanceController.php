<?php

namespace App\Http\Controllers\Dr\Panel\MyPerformance;

use Illuminate\Http\Request;

class MyPerformanceController
{
    public function index(){
        return view('dr.panel.my-performance.index');
    }
    public function chart(){
        return view('dr.panel.my-performance.chart.index');
    }
}

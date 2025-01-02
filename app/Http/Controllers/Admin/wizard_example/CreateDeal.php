<?php

namespace App\Http\Controllers\Admin\wizard_example;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class CreateDeal extends Controller
{
  public function index()
  {
    return view('content.wizard-example.wizard-ex-create-deal');
  }
}

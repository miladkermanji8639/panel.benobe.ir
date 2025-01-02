<?php

namespace App\Http\Controllers\Admin\wizard_example;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class PropertyListing extends Controller
{
  public function index()
  {
    return view('content.wizard-example.wizard-ex-property-listing');
  }
}

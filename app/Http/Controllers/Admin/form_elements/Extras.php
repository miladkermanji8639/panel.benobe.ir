<?php

namespace App\Http\Controllers\Admin\form_elements;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class Extras extends Controller
{
  public function index()
  {
    return view('content.form-elements.forms-extras');
  }
}
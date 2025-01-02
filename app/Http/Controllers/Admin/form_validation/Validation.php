<?php

namespace App\Http\Controllers\Admin\form_validation;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class Validation extends Controller
{
  public function index()
  {
    return view('content.form-validation.form-validation');
  }
}

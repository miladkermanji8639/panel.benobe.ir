<?php

namespace App\Http\Controllers\Admin\form_wizard;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class Icons extends Controller
{
  public function index()
  {
    return view('content.form-wizard.form-wizard-icons');
  }
}

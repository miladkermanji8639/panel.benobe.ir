<?php

namespace App\Http\Controllers\Admin\authentications;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class TwoStepsBasic extends Controller
{
  public function index()
  {
    $pageConfigs = ['myLayout' => 'blank'];
    return view('admin.content.authentications.auth-two-steps-basic', ['pageConfigs' => $pageConfigs]);
  }
}

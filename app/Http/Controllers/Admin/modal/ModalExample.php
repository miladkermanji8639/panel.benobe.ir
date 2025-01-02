<?php

namespace App\Http\Controllers\Admin\modal;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class ModalExample extends Controller
{
  public function index()
  {
    return view('content.modal.modal-examples');
  }
}

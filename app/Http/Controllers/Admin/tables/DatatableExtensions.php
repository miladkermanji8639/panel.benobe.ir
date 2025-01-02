<?php

namespace App\Http\Controllers\Admin\tables;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class DatatableExtensions extends Controller
{
  public function index()
  {
    return view('content.tables.tables-datatables-extensions');
  }
}

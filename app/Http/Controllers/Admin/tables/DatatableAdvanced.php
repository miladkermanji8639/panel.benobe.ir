<?php

namespace App\Http\Controllers\Admin\tables;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class DatatableAdvanced extends Controller
{
  public function index()
  {
    return view('content.tables.tables-datatables-advanced');
  }
}

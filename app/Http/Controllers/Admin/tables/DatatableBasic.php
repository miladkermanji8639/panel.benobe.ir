<?php

namespace App\Http\Controllers\Admin\tables;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class DatatableBasic extends Controller
{
  public function index()
  {
    return view('content.tables.tables-datatables-basic');
  }
}

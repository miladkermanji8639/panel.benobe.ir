<?php

namespace App\Http\Controllers\Admin\maps;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class Leaflet extends Controller
{
  public function index()
  {
    return view('content.maps.maps-leaflet');
  }
}

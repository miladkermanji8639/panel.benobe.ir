<?php

namespace App\Http\Controllers\Admin\cards;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class CardAdvance extends Controller
{
  public function index()
  {
    return view('content.cards.cards-advance');
  }
}

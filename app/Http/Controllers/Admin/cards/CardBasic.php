<?php

namespace App\Http\Controllers\Admin\cards;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class CardBasic extends Controller
{
  public function index()
  {
    return view('content.cards.cards-basic');
  }
}

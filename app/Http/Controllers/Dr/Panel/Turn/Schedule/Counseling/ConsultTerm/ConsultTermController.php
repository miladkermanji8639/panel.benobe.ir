<?php

namespace App\Http\Controllers\Dr\Panel\Turn\Schedule\Counseling\ConsultTerm;

use Illuminate\Http\Request;

class ConsultTermController
{
    public function index(){
        return view('dr.panel.turn.schedule.Counseling.consult-term.index');
    }
}

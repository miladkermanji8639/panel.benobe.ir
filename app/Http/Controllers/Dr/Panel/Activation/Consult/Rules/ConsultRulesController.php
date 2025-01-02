<?php

namespace App\Http\Controllers\Dr\Panel\Activation\Consult\Rules;

class ConsultRulesController
{
    public function index()
    {
        return view('dr.panel.activation.consult.rules.index');
    }
    public function help()
    {
        return view('dr.panel.activation.consult.help.index');
    }
    public function messengers()
    {
        return view('dr.panel.activation.consult.messengers.index');
    }
}

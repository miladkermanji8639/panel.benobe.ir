<?php

namespace App\Http\Controllers\Dr\Panel\Turn;

use Illuminate\Http\Request;

class DrScheduleController
{
    public function index(Request $request)
    {
        return view("dr.panel.turn.schedule.appointments");
    }
    public function myAppointments(Request $request)
    {
        return view("dr.panel.turn.schedule.my-appointments");
    }

    public function show(string $id)
    {
        //
    }
    public function edit(string $id)
    {
        //
    }
    public function update(Request $request, string $id)
    {
        //
    }
    public function destroy($id)
    {

    }
}

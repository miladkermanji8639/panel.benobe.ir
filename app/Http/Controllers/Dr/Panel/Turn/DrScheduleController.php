<?php

namespace App\Http\Controllers\Dr\Panel\Turn;

use App\Models\Dr\Appointment;
use Illuminate\Http\Request;

class DrScheduleController
{
    public function index(Request $request)
    {
        $appointments = Appointment::with(['doctor','patient','insurance'])->get();
        return view("dr.panel.turn.schedule.appointments",compact('appointments'));
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

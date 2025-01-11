<?php

namespace App\Http\Controllers\Dr\Panel\Turn;

use Illuminate\Http\Request;
use App\Models\Dr\Appointment;
use Illuminate\Support\Facades\Auth;

class DrScheduleController
{

    public function getAuthenticatedDoctor(){
        return Auth::guard('doctor')->user()->first();
    }
    public function index(Request $request)
    {
        $doctor = $this->getAuthenticatedDoctor();
        $appointments = Appointment::with(['doctor','patient','insurance','clinic'])->where('doctor_id',$doctor->id)->get();
        return view("dr.panel.turn.schedule.appointments",compact('appointments'));
    }
    public function myAppointments(Request $request)
    {
        return view("dr.panel.turn.schedule.my-appointments");
    }
    public function showByDateAppointments(Request $request)
    {
        $doctor = $this->getAuthenticatedDoctor();
        $date = $request->input('date'); // Get the date from the request

        // Convert the date to the appropriate format if necessary
        $appointments = Appointment::with(['doctor', 'patient', 'insurance', 'clinic'])
            ->where('doctor_id', $doctor->id)
            ->whereDate('reserved_at', '=', $date) // Filter by the selected date
            ->get();

        return view('dr.panel.turn.schedule.appointments_partial', compact('appointments'));
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

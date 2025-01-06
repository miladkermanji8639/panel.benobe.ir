<?php

namespace App\Http\Controllers\Dr\Panel\Profile;

use App\Models\Dr\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DrProfileController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }
    public function subuser()
    {
        return view('dr.panel.profile.subuser');
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(string $id)
    public function edit()
    {
        $doctor = Auth::guard('doctor')->user();
        $specialty = Doctor::with('specialties')->find($doctor->id);
        $specialtyName = $specialty->specialties->first()->name ?? 'No specialty assigned';

        return view("dr.panel.profile.edit-profile", compact('specialtyName'));
    }
    public function niceId()
    {
        return view("dr.panel.profile.edit-niceId");
    }
    public function security()
    {
        return view("dr.panel.profile.security");
    }
    public function upgrade()
    {
        return view("dr.panel.profile.upgrade");
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        dd($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

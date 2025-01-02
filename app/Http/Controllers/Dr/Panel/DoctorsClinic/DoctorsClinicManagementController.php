<?php

namespace App\Http\Controllers\Dr\Panel\DoctorsClinic;

use Illuminate\Http\Request;

class DoctorsClinicManagementController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('dr.panel.doctors-clinic.index');
    }
      public function gallery()
    {
        return view("dr.panel.doctors-clinic.gallery");
        
    }
     public function medicalDoc()
    {
        return view("dr.panel.doctors-clinic.medicalDoc");
        
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

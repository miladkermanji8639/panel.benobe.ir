<?php

namespace App\Http\Controllers\Admin\Doctors\DoctorsManagement;

use App\Models\Dr\Doctor;
use Illuminate\Http\Request;
use App\Http\Controllers\Admin\Controller;
use App\Models\Admin\Dashboard\Cities\Zone;

class DoctorsManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $doctors = Doctor::with(['city', 'province'])->get();

        return view("admin.content.doctors.doctors-management.index", compact('doctors'));
    }
    public function status(Doctor $doctor)
    {

        $doctor->status = $doctor->status == 0 ? 1 : 0;
        $result = $doctor->save();
        if ($result) {
            if ($doctor->status == 0) {
                return response()->json(['status' => true, 'active' => false]);
            } else {
                return response()->json(['status' => true, 'active' => true]);
            }
        } else {
            return response()->json(['status' => false]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("admin.content.doctors.doctors-management.create");
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

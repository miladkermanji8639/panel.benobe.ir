<?php

namespace App\Http\Controllers\Admin\Doctors\WalletDoctorRequest;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class WalletDoctorRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view("admin.content.doctors.wallet-doctor-request.index");
        
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
    // public function show(string $id)
    public function show()
    {
        return view("admin.content.doctors.wallet-doctor-request.show");
        
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

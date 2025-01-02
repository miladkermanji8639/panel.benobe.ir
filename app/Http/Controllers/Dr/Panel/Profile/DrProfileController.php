<?php

namespace App\Http\Controllers\Dr\Panel\Profile;

use Illuminate\Http\Request;

class DrProfileController
{
    /**
     * Display a listing of the resource.
     */
    public function index() {}
    public function subuser(){
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
        return view("dr.panel.profile.edit-profile");
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

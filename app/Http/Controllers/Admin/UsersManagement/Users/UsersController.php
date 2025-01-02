<?php

namespace App\Http\Controllers\Admin\UsersManagement\Users;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view("admin.content.users-management.users.index");
        
    }
    public function profile()
    {
        return view("admin.content.users-management.users.profile.pages-profile-user");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("admin.content.users-management.users.create");
        
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
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(string $id)
    public function edit()
    {
        return view("admin.content.users-management.users.edit");
        
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

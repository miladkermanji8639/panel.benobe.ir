<?php

namespace App\Http\Controllers\Admin\Ads\Banner\Packages;

use App\Http\Controllers\Admin\Controller;
use Illuminate\Http\Request;

class PackagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view("admin.content.ads.banner.packages.index");
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("admin.content.ads.banner.packages.create");
        
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
        return view("admin.content.ads.banner.packages.edit");
        
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

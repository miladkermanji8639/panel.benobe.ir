<?php

namespace Modules\SendOtp\App\Http\Controllers;

use Illuminate\Http\Request;
use Nwidart\Modules\Routing\Controller;

class SendOtpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('sendotp::index');
    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     */


    /**
     * Show the form for editing the specified resource.
     */


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}

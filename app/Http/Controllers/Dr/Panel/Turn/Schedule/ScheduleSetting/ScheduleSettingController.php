<?php

namespace App\Http\Controllers\Dr\Panel\Turn\Schedule\ScheduleSetting;

use Illuminate\Http\Request;

class ScheduleSettingController
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return view("dr.panel.turn.schedule.scheduleSetting.index");
  }
  public function turnContract()
  {
    return view("dr.panel.turn.schedule.turnContract.index");
  }
  public function workhours()
  {
    return view("dr.panel.turn.schedule.scheduleSetting.workhours");

  }
  public function mySpecialDays()
  {
    return view("dr.panel.turn.schedule.scheduleSetting.my-special-days");

  }
  public function vacation()
  {
    return view("dr.panel.turn.schedule.scheduleSetting.vacation");

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

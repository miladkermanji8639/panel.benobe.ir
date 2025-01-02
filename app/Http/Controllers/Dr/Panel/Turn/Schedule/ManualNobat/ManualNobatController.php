<?php

namespace App\Http\Controllers\Dr\Panel\Turn\Schedule\ManualNobat;

use App\Models\User;
use Illuminate\Http\Request;

class ManualNobatController
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return view("dr.panel.turn.schedule.manual_nobat.index");
  }
  public function setting()
  {
    return view("dr.panel.turn.schedule.manual_nobat.manual-nobat-setting");
  }
  public function searchUsers(Request $request)
  {
    try {
      $query = $request->get('query');

      // جستجو در جدول کاربران بر اساس نام، نام خانوادگی، شماره موبایل و کد ملی
      $users = User::where('first_name', 'LIKE', "%{$query}%")
        ->orWhere('last_name', 'LIKE', "%{$query}%")
        ->orWhere('mobile', 'LIKE', "%{$query}%")
        ->orWhere('national_code', 'LIKE', "%{$query}%")
        ->get();

      return response()->json($users);
    } catch (\Exception $e) {
      // ثبت خطا در لاگ لاراول
      \Log::error('Error in searchUsers: ' . $e->getMessage());
      return response()->json(['error' => 'Internal Server Error'], 500);
    }
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

<?php

namespace App\Http\Controllers\Dr\Panel\Turn\Schedule\ScheduleSetting;

use App\Traits\HandlesRateLimiting;
use Illuminate\Http\Request;
use App\Models\Dr\AppointmentSlot;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Dr\DoctorWorkSchedule;
use App\Models\Dr\DoctorAppointmentConfig;

class ScheduleSettingController
{
  use HandlesRateLimiting;
  /**
   * نمایش صفحه ساعات کاری
   */
  public function workhours()
  {
    $doctor = Auth::guard('doctor')->user();

    // بازیابی تنظیمات کلی نوبت‌دهی
    $appointmentConfig = DoctorAppointmentConfig::firstOrCreate(
      ['doctor_id' => $doctor->id],
      [
        'auto_scheduling' => true,
        'online_consultation' => false,
        'holiday_availability' => false
      ]
    );
    // بازیابی برنامه کاری روزهای هفته
    $workSchedules = DoctorWorkSchedule::where('doctor_id', $doctor->id)->get();

    return view("dr.panel.turn.schedule.scheduleSetting.workhours", [
      'appointmentConfig' => $appointmentConfig,
      'workSchedules' => $workSchedules
    ]);
  }
  // در کنترلر ScheduleSettingController
  public function copyWorkHours(Request $request)
  {
    $validated = $request->validate([
      'source_day' => 'required|string',
      'target_days' => 'required|array',
    ]);

    $doctor = Auth::guard('doctor')->user();

    DB::beginTransaction();
    try {
      $sourceWorkSchedule = DoctorWorkSchedule::where('doctor_id', $doctor->id)
        ->where('day', $validated['source_day'])
        ->first();

      if (!$sourceWorkSchedule) {
        return response()->json([
          'message' => 'روز مبدأ یافت نشد',
          'status' => false
        ], 404);
      }

      $sourceSlots = AppointmentSlot::where('work_schedule_id', $sourceWorkSchedule->id)->get();

      if ($sourceSlots->isEmpty()) {
        return response()->json([
          'message' => 'زمانی برای کپی وجود ندارد لطفا ابتدا یک زمان اضافه کنید ',
          'status' => false
        ], 400);
      }

      // استخراج اطلاعات work_hours از اسلات‌ها
      $workHours = $sourceSlots->map(function ($slot) {
        $timeSlots = $slot->time_slots;
        return [
          'start' => $timeSlots['start_time'] ?? $timeSlots['start'],
          'end' => $timeSlots['end_time'] ?? $timeSlots['end'],
          'max_appointments' => $slot->max_appointments
        ];
      })->toArray();

      foreach ($validated['target_days'] as $targetDay) {
        $targetWorkSchedule = DoctorWorkSchedule::updateOrCreate(
          [
            'doctor_id' => $doctor->id,
            'day' => $targetDay
          ],
          [
            'is_working' => true,
            'work_hours' => $workHours,
            'max_appointments' => $sourceWorkSchedule->max_appointments ?? 1
          ]
        );

        // حذف اسلات‌های قبلی
        AppointmentSlot::where('work_schedule_id', $targetWorkSchedule->id)->delete();

        // ایجاد اسلات‌های جدید
        foreach ($sourceSlots as $sourceSlot) {
          $timeSlots = $sourceSlot->time_slots;

          AppointmentSlot::create([
            'work_schedule_id' => $targetWorkSchedule->id,
            'time_slots' => $timeSlots,
            'max_appointments' => $sourceSlot->max_appointments,
            'is_active' => $sourceSlot->is_active
          ]);
        }
      }

      DB::commit();

      return response()->json([
        'message' => 'ساعات کاری با موفقیت کپی شد',
        'status' => true,
        'target_days' => $validated['target_days']
      ]);

    } catch (\Exception $e) {
      DB::rollBack();
      Log::error('خطا در کپی ساعات کاری: ' . $e->getMessage());
      Log::error('جزئیات خطا: ' . $e->getTraceAsString());

      return response()->json([
        'message' => 'خطا در کپی ساعات کاری: ' . $e->getMessage(),
        'status' => false
      ], 500);
    }
  }

  // متد برای بررسی وجود اسلات
  public function checkDaySlots(Request $request)
  {
    $validated = $request->validate([
      'day' => 'required|string'
    ]);

    $doctor = Auth::guard('doctor')->user();

    $workSchedule = DoctorWorkSchedule::where('doctor_id', $doctor->id)
      ->where('day', $validated['day'])
      ->first();

    if (!$workSchedule) {
      return response()->json(['hasSlots' => false]);
    }

    $slotsCount = AppointmentSlot::where('work_schedule_id', $workSchedule->id)->count();

    return response()->json([
      'hasSlots' => $slotsCount > 0
    ]);
  }
  public function saveTimeSlot(Request $request)
  {
    $validated = $request->validate([
      'day' => 'required|in:saturday,sunday,monday,tuesday,wednesday,thursday,friday',
      'start_time' => 'required|string',
      'end_time' => 'required|string',
      'max_appointments' => 'required|integer'
    ]);


    $doctor = Auth::guard('doctor')->user();

    try {
      // بازیابی یا ایجاد رکورد WorkSchedule
      $workSchedule = DoctorWorkSchedule::firstOrCreate(
        [
          'doctor_id' => $doctor->id,
          'day' => $validated['day'],


        ],
        [
          'is_working' => true
        ]
      );
      // ایجاد اسلات جدید
      $slot = AppointmentSlot::updateOrCreate([
        'work_schedule_id' => $workSchedule->id,
        'time_slots' => (['start_time' => $validated['start_time'], 'end_time' => $validated['end_time'], 'max_appointments' => $validated['max_appointments']]),
        'max_appointments' => $validated['max_appointments']
      ]);

      return response()->json([
        'message' => ' موفقیت آمیز',
        'slot_id' => $slot->id,
        'status' => true
      ]);
    } catch (\Exception $e) {
      Log::error('خطا در ذخیره‌سازی: ' . $e->getMessage());

      return response()->json([
        'message' => 'خطا در ذخیره‌سازی ',
        'status' => false
      ], 500);
    }
  }
  public function updateWorkDayStatus(Request $request)
  {
    $validated = $request->validate([
      'day' => 'required|in:saturday,sunday,monday,tuesday,wednesday,thursday,friday',
      'is_working' => 'required|in:0,1,true,false' // تغییر ولیدیشن
    ]);

    try {
      $doctor = Auth::guard('doctor')->user();

      // تبدیل مقدار به boolean
      $isWorking = filter_var($validated['is_working'], FILTER_VALIDATE_BOOLEAN);

      // بروزرسانی یا ایجاد رکورد برای روز مورد نظر
      $workSchedule = DoctorWorkSchedule::updateOrCreate(
        [
          'doctor_id' => $doctor->id,
          'day' => $validated['day']
        ],
        [
          'is_working' => $isWorking // استفاده از مقدار boolean
        ]
      );

      return response()->json([
        'message' => $isWorking
          ? 'روز کاری با موفقیت فعال شد'
          : 'روز کاری با موفقیت غیرفعال شد',
        'status' => true,
        'data' => $workSchedule
      ], 200);

    } catch (\Exception $e) {
      Log::error('Error updating work day status: ' . $e->getMessage());

      return response()->json([
        'message' => 'خطا در بروزرسانی وضعیت روز کاری',
        'status' => false,
        'error' => config('app.debug') ? $e->getMessage() : null
      ], 500);
    }
  }
  public function updateAutoScheduling(Request $request)
  {

    try {
      // Validate the incoming request
      $validated = $request->validate([
        'auto_scheduling' => 'boolean',
        'additional_settings' => 'sometimes|array'
      ]);

      // Get the authenticated doctor
      $doctor = Auth::guard('doctor')->user();

      // Start database transaction for atomic operation
      DB::beginTransaction();

      // Update or create appointment configuration
      $appointmentConfig = DoctorAppointmentConfig::updateOrCreate(
        ['doctor_id' => $doctor->id],
        [
          'auto_scheduling' => $validated['auto_scheduling'],
          // Additional settings if provided
          'additional_settings' => $validated['additional_settings'] ?? null
        ]
      );

      // Log the configuration change



      // Commit the transaction
      DB::commit();

      // Prepare response
      return response()->json([
        'message' => $validated['auto_scheduling']
          ? 'نوبت دهی خودکار فعال شد'
          : 'نوبت دهی خودکار غیرفعال شد',
        'status' => true,
        'data' => [
          'auto_scheduling' => $appointmentConfig->auto_scheduling
        ]
      ], 200);

    } catch (\Exception $e) {
      // Rollback transaction in case of error
      DB::rollBack();

      // Log the error
      Log::error('Auto Scheduling Update Error: ' . $e->getMessage(), [
        'doctor_id' => $doctor->id ?? null,
        'error' => $e->getMessage(),
        'trace' => $e->getTraceAsString()
      ]);

      return response()->json([
        'message' => 'خطا در به‌روزرسانی تنظیمات',
        'status' => false,
        'error' => config('app.debug') ? $e->getMessage() : 'خطای داخلی سرور'
      ], 500);
    }
  }
  public function saveAppointmentSettings(Request $request)
  {

    $validated = $request->validate([
      'day' => 'required|in:saturday,sunday,monday,tuesday,wednesday,thursday,friday',
      'start_time' => 'required|date_format:H:i',
      'end_time' => 'required|date_format:H:i|after:start_time',
      'max_appointments' => 'nullable|integer|min:1'
    ]);

    try {
      $doctor = Auth::guard('doctor')->user();

      // محاسبه تعداد نوبت‌ها
      $maxAppointments = $validated['max_appointments'] ??
        $this->calculateMaxAppointments($validated['start_time'], $validated['end_time']);

      // بررسی اینکه آیا روز انتخاب شده است
      $selectedDays = $request->input('selected_days', []);
      if (empty($selectedDays)) {
        return response()->json([
          'message' => 'لطفاً حداقل یک روز را انتخاب کنید',
          'status' => false
        ], 400);
      }

      $results = [];
      foreach ($selectedDays as $day) {
        $workSchedule = DoctorWorkSchedule::updateOrCreate(
          [
            'doctor_id' => $doctor->id,
            'day' => $day
          ],
          [
            'is_working' => true,
            'appointment_settings' => json_encode([
              'start_time' => $validated['start_time'],
              'end_time' => $validated['end_time'],
              'max_appointments' => $maxAppointments,
              'selected_day' => $request->day
            ])
          ]
        );

        $results[] = [
          'day' => $this->getDayNameInPersian($day),
          'start_time' => $validated['start_time'],
          'end_time' => $validated['end_time']
        ];
      }

      return response()->json([
        'message' => 'تنظیمات نوبت‌دهی با موفقیت ذخیره شد',
        'results' => $results,
        'status' => true
      ]);
    } catch (\Exception $e) {
      Log::error('خطا در ذخیره‌سازی تنظیمات نوبت‌دهی: ' . $e->getMessage());

      return response()->json([
        'message' => 'خطا در ذخیره‌سازی تنظیمات',
        'status' => false
      ], 500);
    }
  }

  private function getDayNameInPersian($day)
  {
    $days = [
      'saturday' => 'شنبه',
      'sunday' => 'یکشنبه',
      'monday' => 'دوشنبه',
      'tuesday' => 'سه‌شنبه',
      'wednesday' => 'چهارشنبه',
      'thursday' => 'پنج‌شنبه',
      'friday' => 'جمعه'
    ];

    return $days[$day] ?? $day;
  }

  private function calculateMaxAppointments($startTime, $endTime)
  {
    $start = \Carbon\Carbon::createFromFormat('H:i', $startTime);
    $end = \Carbon\Carbon::createFromFormat('H:i', $endTime);

    // فرض کنید هر نوبت 20 دقیقه طول می‌کشد
    $diffInMinutes = $start->diffInMinutes($end);
    return floor($diffInMinutes / 20);
  }
  public function getAppointmentSettings(Request $request)
  {

    $doctor = Auth::guard('doctor')->user();

    $workSchedule = DoctorWorkSchedule::where('doctor_id', $doctor->id)
      ->where('day', $request->day)
      ->first();

    if ($workSchedule && $workSchedule->appointment_settings) {
      return response()->json([
        'settings' => $workSchedule->appointment_settings,
        'status' => true
      ]);
    }

    return response()->json([
      'message' => 'تنظیماتی یافت نشد',
      'status' => false
    ]);
  }
  public function saveWorkSchedule(Request $request)
  {
    $validatedData = $request->validate([
      'auto_scheduling' => 'boolean',
      'calendar_days' => 'nullable|integer|min:1|max:365',
      'online_consultation' => 'boolean',
      'holiday_availability' => 'boolean',
      'days' => 'array',
    ]);

    DB::beginTransaction();
    try {
      $doctor = Auth::guard('doctor')->user();

      // حذف تنظیمات قبلی
      DoctorWorkSchedule::where('doctor_id', $doctor->id)->delete();
      AppointmentSlot::whereHas('workSchedule', function ($query) use ($doctor) {
        $query->where('doctor_id', $doctor->id);
      })->delete();

      // ذخیره تنظیمات کلی
      $appointmentConfig = DoctorAppointmentConfig::updateOrCreate(
        ['doctor_id' => $doctor->id],
        [
          'auto_scheduling' => $validatedData['auto_scheduling'] ?? false,
          'calendar_days' => $request->input('calendar_days'),
          'online_consultation' => $validatedData['online_consultation'] ?? false,
          'holiday_availability' => $validatedData['holiday_availability'] ?? false,
        ]
      );
      // ذخیره برنامه کاری روزها
      foreach ($validatedData['days'] as $day => $dayConfig) {
        $workSchedule = DoctorWorkSchedule::create([
          'doctor_id' => $doctor->id,
          'day' => $day,
          'is_working' => $dayConfig['is_working'] ?? false,
          'work_hours' => $dayConfig['work_hours'] ?? null,
        ]);

        // ذخیره اسلات‌ها
        if (isset($dayConfig['slots']) && is_array($dayConfig['slots'])) {
          foreach ($dayConfig['slots'] as $slot) {
            Log::info('Saving Slot', $slot); // لاگ برای اسلات‌ها

            AppointmentSlot::create([
              'work_schedule_id' => $workSchedule->id,
              'start_time' => $slot['start_time'],
              'end_time' => $slot['end_time'],
              'max_appointments' => $slot['max_appointments'] ?? 1,
              'slot_type' => $this->determineSlotType($slot['start_time']),
              'is_active' => true
            ]);
          }
        }
      }

      DB::commit();
      return response()->json([
        'message' => 'تنظیمات با موفقیت ذخیره شد',
        'status' => true,
        'data' => [
          'calendar_days' => $appointmentConfig->calendar_days
        ]
      ]);
    } catch (\Exception $e) {
      DB::rollBack();
      Log::error('خطا در ذخیره‌سازی تنظیمات: ' . $e->getMessage(), [
        'trace' => $e->getTraceAsString()
      ]);

      return response()->json([
        'message' => 'خطا در ذخیره‌سازی تنظیمات: ' . $e->getMessage(),
        'status' => false
      ], 500);
    }
  }
  public function deleteScheduleSetting(Request $request)
  {
    dd($request);
    $validated = $request->validate([
      'day' => 'required',
      'start_time' => 'required',
      'end_time' => 'required'
    ]);

    $doctor = Auth::guard('doctor')->user();

    $workSchedule = DoctorWorkSchedule::where('doctor_id', $doctor->id)
      ->where('day', $validated['day'])
      ->first();

    if ($workSchedule) {
      // حذف تنظیمات مربوط به این زمان
      $appointmentSettings = json_decode($workSchedule->appointment_settings, true);

      // فیلتر کردن و حذف تنظیمات مورد نظر
      $newSettings = array_filter($appointmentSettings, function ($setting) use ($validated) {
        return !($setting['start_time'] === $validated['start_time'] &&
          $setting['end_time'] === $validated['end_time']);
      });

      $workSchedule->appointment_settings = json_encode($newSettings);
      $workSchedule->save();

      return response()->json(['message' => 'تنظیمات با موفقیت حذف شد', 'status' => true]);
    }

    return response()->json(['message' => 'تنظیمات یافت نشد', 'status' => false], 404);
  }
  /**
   * تعیین نوع اسلات بر اساس زمان
   */
  private function determineSlotType($startTime)
  {
    $hour = intval(substr($startTime, 0, 2));

    if ($hour >= 5 && $hour < 12) {
      return 'morning';
    } elseif ($hour >= 12 && $hour < 17) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  }

  /**
   * بازیابی تنظیمات ساعات کاری
   */
  public function getWorkSchedule()
  {
    $doctor = Auth::guard('doctor')->user();

    $appointmentConfig = DoctorAppointmentConfig::where('doctor_id', $doctor->id)->first();
    $workSchedules = DoctorWorkSchedule::with('slots')
      ->where('doctor_id', $doctor->id)
      ->get();

    return response()->json([
      'appointmentConfig' => $appointmentConfig,
      'workSchedules' => $workSchedules
    ]);
  }

  // متدهای موجود در کنترلر اصلی
  public function index()
  {
    return view("dr.panel.turn.schedule.scheduleSetting.index");
  }

  public function turnContract()
  {
    return view("dr.panel.turn.schedule.turnContract.index");
  }

  public function mySpecialDays()
  {
    return view("dr.panel.turn.schedule.scheduleSetting.my-special-days");
  }

  public function vacation()
  {
    return view("dr.panel.turn.schedule.scheduleSetting.vacation");
  }
  public function destroy($id)
  {
    try {
      $appointmentSlot = AppointmentSlot::findOrFail($id);
      $appointmentSlot->delete();

      return response()->json([
        'message' => 'حذف موفقیت آمیز',
        'status' => true
      ]);
    } catch (\Exception $e) {

      return response()->json([
        'message' => 'خطا در حذف  ',
        'status' => false
      ], 500);
    }
  }
}
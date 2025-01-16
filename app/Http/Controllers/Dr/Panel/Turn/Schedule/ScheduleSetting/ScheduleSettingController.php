<?php

namespace App\Http\Controllers\Dr\Panel\Turn\Schedule\ScheduleSetting;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Dr\AppointmentSlot;
use Illuminate\Support\Facades\DB;
use App\Traits\HandlesRateLimiting;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Dr\DoctorWorkSchedule;
use Illuminate\Support\Facades\Cache;
use App\Models\Dr\DoctorAppointmentConfig;

class ScheduleSettingController
{
  use HandlesRateLimiting;
  /**
   * نمایش صفحه ساعات کاری
   */
  public function workhours()
  {
    $doctorId = Auth::guard('doctor')->id();

    // بررسی کش برای اطلاعات ساعات کاری
    $cacheKey = "doctor_workhours_{$doctorId}";
    $workHoursData = Cache::remember($cacheKey, 3600, function () use ($doctorId) {
      $appointmentConfig = DoctorAppointmentConfig::firstOrCreate(
        ['doctor_id' => $doctorId],
        [
          'auto_scheduling' => true,
          'online_consultation' => false,
          'holiday_availability' => false
        ]
      );

      $workSchedules = DoctorWorkSchedule::where('doctor_id', $doctorId)->get();

      return [
        'appointmentConfig' => $appointmentConfig,
        'workSchedules' => $workSchedules
      ];
    });

    return view("dr.panel.turn.schedule.scheduleSetting.workhours", [
      'appointmentConfig' => $workHoursData['appointmentConfig'],
      'workSchedules' => $workHoursData['workSchedules']
    ]);
  }

  public function copyWorkHours(Request $request)
  {
    $validated = $request->validate([
      'source_day' => 'required|string',
      'target_days' => 'required|array|min:1',
    ]);

    $doctor = Auth::guard('doctor')->user();

    DB::beginTransaction();
    try {
      // بازیابی برنامه کاری روز مبدأ
      $sourceWorkSchedule = DoctorWorkSchedule::where('doctor_id', $doctor->id)
        ->where('day', $validated['source_day'])
        ->first();

      if (!$sourceWorkSchedule) {
        return response()->json([
          'message' => 'روز مبدأ یافت نشد',
          'status' => false
        ], 404);
      }

      // بازیابی اسلات‌های روز مبدأ
      $sourceSlots = AppointmentSlot::where('work_schedule_id', $sourceWorkSchedule->id)->get();

      if ($sourceSlots->isEmpty()) {
        return response()->json([
          'message' => 'زمانی برای کپی وجود ندارد. لطفاً ابتدا یک زمان اضافه کنید.',
          'status' => false
        ], 400);
      }

      // استخراج work_hours از اسلات‌ها
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
            'day' => $targetDay,
          ],
          [
            'is_working' => true,
            'work_hours' => json_encode($workHours), // ذخیره work_hours به صورت JSON
          ]
        );

        // حذف اسلات‌های قبلی
        AppointmentSlot::where('work_schedule_id', $targetWorkSchedule->id)->delete();

        // ایجاد اسلات‌های جدید
        foreach ($sourceSlots as $sourceSlot) {
          AppointmentSlot::create([
            'work_schedule_id' => $targetWorkSchedule->id,
            'time_slots' => $sourceSlot->time_slots,
            'max_appointments' => $sourceSlot->max_appointments,
            'is_active' => $sourceSlot->is_active,
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

      Log::error('خطا در کپی ساعات کاری: ' . $e->getMessage(), [
        'doctor_id' => $doctor->id ?? null,
        'trace' => $e->getTraceAsString(),
      ]);

      return response()->json([
        'message' => 'خطا در کپی ساعات کاری. لطفاً مجدداً تلاش کنید.',
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

    // تلاش برای بازیابی اطلاعات از کش
    $cacheKey = "doctor_{$doctor->id}_day_slots_{$validated['day']}";
    $hasSlots = Cache::remember($cacheKey, now()->addMinutes(30), function () use ($doctor, $validated) {
      $workSchedule = DoctorWorkSchedule::where('doctor_id', $doctor->id)
        ->where('day', $validated['day'])
        ->first();

      if (!$workSchedule) {
        return false;
      }

      $slotsCount = AppointmentSlot::where('work_schedule_id', $workSchedule->id)->count();

      return $slotsCount > 0;
    });

    return response()->json(['hasSlots' => $hasSlots]);
  }

  public function saveTimeSlot(Request $request)
  {
    $validated = $request->validate([
      'day' => 'required|in:saturday,sunday,monday,tuesday,wednesday,thursday,friday',
      'start_time' => 'required|date_format:H:i',
      'end_time' => 'required|date_format:H:i|after:start_time',
      'max_appointments' => 'required|integer|min:1'
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

      // بررسی تداخل زمانی
      $existingSlots = Cache::remember(
        "doctor_{$doctor->id}_slots_{$validated['day']}",
        now()->addMinutes(30),
        function () use ($doctor, $validated) {
          return AppointmentSlot::whereHas('workSchedule', function ($query) use ($doctor, $validated) {
            $query->where('doctor_id', $doctor->id)
              ->where('day', $validated['day']);
          })->get();
        }
      );

      foreach ($existingSlots as $slot) {
        $slotStart = Carbon::createFromFormat('H:i', $slot->time_slots['start_time']);
        $slotEnd = Carbon::createFromFormat('H:i', $slot->time_slots['end_time']);
        $newStart = Carbon::createFromFormat('H:i', $validated['start_time']);
        $newEnd = Carbon::createFromFormat('H:i', $validated['end_time']);

        if (
          ($newStart >= $slotStart && $newStart < $slotEnd) ||
          ($newEnd > $slotStart && $newEnd <= $slotEnd) ||
          ($newStart <= $slotStart && $newEnd >= $slotEnd)
        ) {
          return response()->json([
            'message' => 'این بازه زمانی با بازه‌های موجود تداخل دارد.',
            'status' => false
          ], 400);
        }
      }

      // ایجاد اسلات جدید
      $slot = AppointmentSlot::create([
        'work_schedule_id' => $workSchedule->id,
        'time_slots' => [
          'start_time' => $validated['start_time'],
          'end_time' => $validated['end_time']
        ],
        'max_appointments' => $validated['max_appointments'],
        'is_active' => true
      ]);

      // به‌روزرسانی کش
      Cache::forget("doctor_{$doctor->id}_slots_{$validated['day']}");

      return response()->json([
        'message' => 'موفقیت آمیز',
        'slot_id' => $slot->id,
        'status' => true
      ]);
    } catch (\Exception $e) {
      Log::error('خطا در ذخیره‌سازی: ' . $e->getMessage());

      return response()->json([
        'message' => 'خطا در ذخیره‌سازی',
        'status' => false
      ], 500);
    }
  }

  public function updateWorkDayStatus(Request $request)
  {
    $validated = $request->validate([
      'day' => 'required|in:saturday,sunday,monday,tuesday,wednesday,thursday,friday',
      'is_working' => 'required|in:0,1,true,false'
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
          'is_working' => $isWorking
        ]
      );

      // به‌روزرسانی کش
      Cache::forget("doctor_{$doctor->id}_work_schedule");
      Cache::remember(
        "doctor_{$doctor->id}_work_schedule",
        now()->addMinutes(30),
        function () use ($doctor) {
          return DoctorWorkSchedule::where('doctor_id', $doctor->id)->get();
        }
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
    $validated = $request->validate([
      'auto_scheduling' => 'required|boolean',
    ]);

    try {
      // بازیابی پزشک واردشده
      $doctor = Auth::guard('doctor')->user();

      // بروزرسانی یا ایجاد تنظیمات
      $appointmentConfig = DoctorAppointmentConfig::updateOrCreate(
        ['doctor_id' => $doctor->id],
        ['auto_scheduling' => $validated['auto_scheduling']]
      );

      // بروزرسانی کش تنظیمات نوبت‌دهی
      Cache::forget("doctor_{$doctor->id}_appointment_config");
      Cache::remember(
        "doctor_{$doctor->id}_appointment_config",
        now()->addMinutes(30),
        function () use ($doctor) {
          return DoctorAppointmentConfig::where('doctor_id', $doctor->id)->first();
        }
      );

      return response()->json([
        'message' => $validated['auto_scheduling']
          ? 'نوبت‌دهی خودکار فعال شد'
          : 'نوبت‌دهی خودکار غیرفعال شد',
        'status' => true,
        'data' => [
          'auto_scheduling' => $appointmentConfig->auto_scheduling
        ]
      ], 200);
    } catch (\Exception $e) {
      Log::error('خطا در به‌روزرسانی وضعیت نوبت‌دهی خودکار: ' . $e->getMessage());

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
      'start_time' => 'required|date_format:H:i',
      'end_time' => 'required|date_format:H:i|after:start_time',
      'selected_days' => 'required|array|min:1',
      'selected_days.*' => 'in:saturday,sunday,monday,tuesday,wednesday,thursday,friday',
    ]);

    try {
      $doctor = Auth::guard('doctor')->user();

      // پاک کردن کش قبلی
      Cache::forget("doctor_{$doctor->id}_work_schedule");

      $results = [];
      DB::beginTransaction();

      foreach ($validated['selected_days'] as $day) {
        $workSchedule = DoctorWorkSchedule::updateOrCreate(
          [
            'doctor_id' => $doctor->id,
            'day' => $day,
          ],
          [
            'is_working' => true,
            'appointment_settings' => json_encode([
              'start_time' => $validated['start_time'],
              'end_time' => $validated['end_time'],
              'max_appointments' => $this->calculateMaxAppointments(
                $validated['start_time'],
                $validated['end_time']
              )
            ]),
          ]
        );

        $results[] = [
          'day' => $this->getDayNameInPersian($day),
          'start_time' => $validated['start_time'],
          'end_time' => $validated['end_time'],
        ];
      }

      // ذخیره تنظیمات جدید در کش
      Cache::remember(
        "doctor_{$doctor->id}_work_schedule",
        now()->addMinutes(30),
        function () use ($doctor) {
          return DoctorWorkSchedule::where('doctor_id', $doctor->id)->get();
        }
      );

      DB::commit();

      return response()->json([
        'message' => 'تنظیمات نوبت‌دهی با موفقیت ذخیره شد',
        'results' => $results,
        'status' => true,
      ]);
    } catch (\Exception $e) {
      DB::rollBack();
      Log::error('خطا در ذخیره تنظیمات نوبت‌دهی: ' . $e->getMessage());

      return response()->json([
        'message' => 'خطا در ذخیره‌سازی تنظیمات',
        'status' => false,
      ], 500);
    }
  }


  private function getDayNameInPersian($day)
  {
    try {
      $days = [
        'saturday' => 'شنبه',
        'sunday' => 'یکشنبه',
        'monday' => 'دوشنبه',
        'tuesday' => 'سه‌شنبه',
        'wednesday' => 'چهارشنبه',
        'thursday' => 'پنج‌شنبه',
        'friday' => 'جمعه'
      ];

      return $days[$day] ?? $day; // بازگرداندن مقدار فارسی یا مقدار پیش‌فرض
    } catch (\Exception $e) {
      Log::error('خطا در تبدیل نام روز: ' . $e->getMessage());
      return $day; // بازگرداندن مقدار اصلی در صورت بروز خطا
    }
  }


  private function calculateMaxAppointments($startTime, $endTime)
  {
    try {
      // تبدیل زمان‌ها به فرمت Carbon
      $start = Carbon::createFromFormat('H:i', $startTime);
      $end = Carbon::createFromFormat('H:i', $endTime);

      // محاسبه تفاوت زمانی به دقیقه
      $diffInMinutes = $start->diffInMinutes($end);

      // تعیین طول هر نوبت (به دقیقه)
      $appointmentDuration = config('settings.default_appointment_duration', 20); // 20 دقیقه پیش‌فرض

      // محاسبه تعداد نوبت‌ها
      return floor($diffInMinutes / $appointmentDuration);
    } catch (\Exception $e) {
      Log::error('خطا در محاسبه تعداد نوبت‌ها: ' . $e->getMessage(), [
        'startTime' => $startTime,
        'endTime' => $endTime
      ]);
      return 0; // بازگرداندن مقدار صفر در صورت بروز خطا
    }
  }

  public function getAppointmentSettings(Request $request)
  {
    $validated = $request->validate([
      'day' => 'required|in:saturday,sunday,monday,tuesday,wednesday,thursday,friday',
    ]);

    $doctor = Auth::guard('doctor')->user();

    try {
      // تلاش برای بازیابی تنظیمات از کش
      $workSchedules = Cache::remember(
        "doctor_{$doctor->id}_work_schedule",
        now()->addMinutes(30),
        function () use ($doctor) {
          return DoctorWorkSchedule::where('doctor_id', $doctor->id)->get();
        }
      );

      // یافتن تنظیمات روز مورد نظر
      $workSchedule = $workSchedules->where('day', $validated['day'])->first();

      if ($workSchedule && $workSchedule->appointment_settings) {
        return response()->json([
          'settings' => json_decode($workSchedule->appointment_settings, true),
          'status' => true,
        ]);
      }

      return response()->json([
        'message' => 'تنظیماتی یافت نشد',
        'status' => false,
      ]);
    } catch (\Exception $e) {
      Log::error('خطا در بازیابی تنظیمات نوبت‌دهی: ' . $e->getMessage());

      return response()->json([
        'message' => 'خطا در بازیابی تنظیمات',
        'status' => false,
      ], 500);
    }
  }

  public function saveWorkSchedule(Request $request)
  {
    $validated = $request->validate([
      'auto_scheduling' => 'boolean',
      'calendar_days' => 'nullable|integer|min:1|max:365',
      'online_consultation' => 'boolean',
      'holiday_availability' => 'boolean',
      'days' => 'array',
    ]);

    $doctor = Auth::guard('doctor')->user();

    DB::beginTransaction();
    try {
      // ذخیره تنظیمات کلی نوبت‌دهی
      $appointmentConfig = DoctorAppointmentConfig::updateOrCreate(
        ['doctor_id' => $doctor->id],
        [
          'auto_scheduling' => $validated['auto_scheduling'] ?? false,
          'calendar_days' => $validated['calendar_days'] ?? 30,
          'online_consultation' => $validated['online_consultation'] ?? false,
          'holiday_availability' => $validated['holiday_availability'] ?? false,
        ]
      );

      // حذف برنامه‌های قبلی
      DoctorWorkSchedule::where('doctor_id', $doctor->id)->delete();
      AppointmentSlot::whereHas('workSchedule', function ($query) use ($doctor) {
        $query->where('doctor_id', $doctor->id);
      })->delete();

      // ذخیره برنامه کاری جدید
      foreach ($validated['days'] as $day => $dayConfig) {
        $workSchedule = DoctorWorkSchedule::create([
          'doctor_id' => $doctor->id,
          'day' => $day,
          'is_working' => $dayConfig['is_working'] ?? false,
          'work_hours' => $dayConfig['work_hours'] ?? null,
        ]);

        // ذخیره اسلات‌های زمانی
        if (!empty($dayConfig['slots']) && is_array($dayConfig['slots'])) {
          foreach ($dayConfig['slots'] as $slot) {
            AppointmentSlot::create([
              'work_schedule_id' => $workSchedule->id,
              'time_slots' => $slot['time_slots'],
              'max_appointments' => $slot['max_appointments'] ?? 1,
              'is_active' => true,
            ]);
          }
        }
      }

      // پاک کردن کش‌های مرتبط
      Cache::forget("doctor_{$doctor->id}_work_schedule");
      Cache::forget("doctor_{$doctor->id}_appointment_config");

      DB::commit();

      return response()->json([
        'message' => 'تنظیمات با موفقیت ذخیره شد',
        'status' => true,
      ]);
    } catch (\Exception $e) {
      DB::rollBack();

      Log::error('خطا در ذخیره‌سازی برنامه کاری: ' . $e->getMessage());
      return response()->json([
        'message' => 'خطا در ذخیره‌سازی برنامه کاری',
        'status' => false,
      ], 500);
    }
  }

  public function getAllDaysSettings(Request $request)
  {
    try {
      $doctor = Auth::guard('doctor')->user();

      // کلید کش برای ذخیره تنظیمات
      $cacheKey = "doctor_{$doctor->id}_all_days_settings";

      // بررسی کش برای داده‌های موجود
      $settings = Cache::remember($cacheKey, now()->addMinutes(60), function () use ($doctor) {
        $workSchedules = DoctorWorkSchedule::where('doctor_id', $doctor->id)->get();

        return $workSchedules->map(function ($schedule) {
          return [
            'day' => $schedule->day,
            'start_time' => $schedule->appointment_settings['start_time'] ?? null,
            'end_time' => $schedule->appointment_settings['end_time'] ?? null,
          ];
        });
      });

      return response()->json([
        'status' => true,
        'settings' => $settings,
      ]);
    } catch (\Exception $e) {
      Log::error('خطا در دریافت تنظیمات همه روزها: ' . $e->getMessage());

      return response()->json([
        'message' => 'خطا در دریافت تنظیمات',
        'status' => false,
      ], 500);
    }
  }


  public function deleteScheduleSetting(Request $request)
  {
    $validated = $request->validate([
      'day' => 'required|in:saturday,sunday,monday,tuesday,wednesday,thursday,friday',
      'start_time' => 'required|date_format:H:i',
      'end_time' => 'required|date_format:H:i',
    ]);

    try {
      $doctor = Auth::guard('doctor')->user();

      // کلید کش برای ذخیره تنظیمات
      $cacheKey = "doctor_{$doctor->id}_all_days_settings";

      DB::beginTransaction();

      // یافتن تنظیمات برای روز مشخص
      $workSchedule = DoctorWorkSchedule::where('doctor_id', $doctor->id)
        ->where('day', $validated['day'])
        ->first();

      if ($workSchedule) {
        // حذف تنظیمات نوبت‌دهی
        $workSchedule->appointment_settings = null;
        $workSchedule->save();

        // حذف اطلاعات کش شده
        Cache::forget($cacheKey);

        DB::commit();

        return response()->json([
          'message' => 'تنظیمات با موفقیت حذف شد',
          'status' => true,
        ]);
      } else {
        return response()->json([
          'message' => 'تنظیمات یافت نشد',
          'status' => false,
        ], 404);
      }
    } catch (\Exception $e) {
      DB::rollBack();
      Log::error('خطا در حذف تنظیمات: ' . $e->getMessage());

      return response()->json([
        'message' => 'خطا در حذف تنظیمات',
        'status' => false,
      ], 500);
    }
  }


  /**
   * تعیین نوع اسلات بر اساس زمان
   */
  private function determineSlotType($startTime)
  {
    try {
      $hour = intval(substr($startTime, 0, 2));

      if ($hour >= 5 && $hour < 12) {
        return 'morning'; // اسلات صبح
      } elseif ($hour >= 12 && $hour < 17) {
        return 'afternoon'; // اسلات بعد از ظهر
      } else {
        return 'evening'; // اسلات عصر
      }
    } catch (\Exception $e) {
      Log::error('خطا در تعیین نوع اسلات: ' . $e->getMessage());
      return 'unknown'; // بازگرداندن مقدار پیش‌فرض در صورت بروز خطا
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
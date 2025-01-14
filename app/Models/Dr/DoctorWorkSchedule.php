<?php

namespace App\Models\Dr;

use Illuminate\Database\Eloquent\Model;

class DoctorWorkSchedule extends Model
{


    protected $fillable = [
        'doctor_id',
        'day',
        'is_working', // اضافه کردن is_working به فیلدهای قابل پر شدن
        'work_hours',
        'appointment_settings'
    ];

    protected $casts = [
        'work_hours' => 'array',
        'appointment_settings' => 'array',
        'is_working' => 'boolean'
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function slots()
    {
        return $this->hasMany(AppointmentSlot::class, 'work_schedule_id');
    }
    public function setAppointmentSettingsAttribute($value)
    {
        // اگر آرایه باشد، به JSON تبدیل کن
        if (is_array($value)) {
            $this->attributes['appointment_settings'] = json_encode([
                'start_time' => $value['start_time'] ?? null,
                'end_time' => $value['end_time'] ?? null,
                'day_name' => $this->getDayNameInPersian($this->day),
                'max_appointments' => $value['max_appointments'] ?? $this->calculateMaxAppointments($value['start_time'], $value['end_time'])
            ]);
        } else {
            $this->attributes['appointment_settings'] = $value;
        }
    }

    public function getAppointmentSettingsAttribute($value)
    {
        // تبدیل JSON به آرایه
        return json_decode($value, true);
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
        // محاسبه تعداد نوبت‌ها بر اساس زمان شروع و پایان
        $start = \Carbon\Carbon::createFromFormat('H:i', $startTime);
        $end = \Carbon\Carbon::createFromFormat('H:i', $endTime);

        // محاسبه تفاوت زمانی به دقیقه
        $diffInMinutes = $start->diffInMinutes($end);

        // فرض کنید هر نوبت 20 دقیقه طول می‌کشد
        return floor($diffInMinutes / 20);
    }
}

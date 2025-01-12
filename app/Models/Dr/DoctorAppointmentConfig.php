<?php

namespace App\Models\Dr;

use Illuminate\Database\Eloquent\Model;

class DoctorAppointmentConfig extends Model
{
    protected $fillable = [
        'doctor_id',
        'auto_scheduling',
        'calendar_days',
        'online_consultation',
        'holiday_availability'
    ];

    public function setCalendarDaysAttribute($value)
    {
        $this->attributes['calendar_days'] = $value ?? 30;
    }

    // متد سفارشی برای بازگرداندن calendar_days
    public function getCalendarDaysAttribute($value)
    {
        return intval($value) ?: 30;
    }
}
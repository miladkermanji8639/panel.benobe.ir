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
}

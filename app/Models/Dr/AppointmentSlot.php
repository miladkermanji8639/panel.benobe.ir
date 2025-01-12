<?php

namespace App\Models\Dr;

use Illuminate\Database\Eloquent\Model;

class AppointmentSlot extends Model
{
    protected $fillable = [
        'work_schedule_id',
        'start_time',
        'end_time',
        'max_appointments',
        'slot_type',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function workSchedule()
    {
        return $this->belongsTo(DoctorWorkSchedule::class, 'work_schedule_id');
    }
}

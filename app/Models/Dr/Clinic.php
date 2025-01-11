<?php

namespace App\Models\Dr;

use Illuminate\Database\Eloquent\Model;

class Clinic extends Model
{
    protected $fillable = [
        'doctor_id',
        'name',
        'address',
        'phone_number',
        // سایر فیلدها
    ];

    // رابطه با مدل دکتر
    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    // رابطه با نوبت‌ها
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}

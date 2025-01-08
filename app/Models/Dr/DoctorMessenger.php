<?php

namespace App\Models\Dr;

use Illuminate\Database\Eloquent\Model;

class DoctorMessenger extends Model
{
    protected $table = 'doctor_messengers';

    protected $fillable = [
        'doctor_id',
        'messenger_type',
        'phone_number',
        'username',
        'is_secure_call',
    ];

    // رابطه با مدل Doctor
    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}

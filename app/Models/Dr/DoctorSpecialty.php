<?php

namespace App\Models\Dr;

use App\Models\Dr\Doctor;
use App\Models\Dr\Specialty;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DoctorSpecialty extends Model
{
    use HasFactory;
    protected $table = 'doctor_specialty';

    protected $fillable = [
        'doctor_id',
        'specialty_id',
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);
    }
}

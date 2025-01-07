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
        'academic_degree_id',
        'specialty_id',
        'specialty_title',
        'is_main'
      ];
    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            // اگر تخصص اصلی وجود ندارد، این تخصص را به عنوان تخصص اصلی تنظیم کنید
            if (!self::where('doctor_id', $model->doctor_id)->where('is_main', 1)->exists()) {
                $model->is_main = 1;
            } else {
                $model->is_main = 0;
            }
        });
    }
    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);
    }
}

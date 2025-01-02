<?php

namespace App\Models;

use App\Models\Dr\DrSpecialty;
use App\Models\Dr\DrSpecialties;
use Illuminate\Database\Eloquent\Model;
use App\Models\Admin\Dashboard\Cities\Zone;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class HealthcareCenter extends Model
{
    protected $table = 'healthcare_centers';
    use HasFactory;
    protected $fillable = [
        'name',
        'type',
        'sayam_code',
        'province_id',
        'city_id',
        'specialty_id',
        'address',
        'description'
    ];
    public function city()
    {
        return $this->belongsTo(Zone::class, 'city_id'); // ارتباط با شهر
    }
    public function province()
    {
        return $this->belongsTo(Zone::class, 'province_id'); // ارتباط با شهر
    }

    public function specialty()
    {
        return $this->belongsTo(DrSpecialty::class, 'specialty_id'); // ارتباط با تخصص
    }
}

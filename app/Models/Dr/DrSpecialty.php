<?php

namespace App\Models\Dr;

use App\Models\Dr\Doctor;
use App\Models\Dr\SubSpecialty;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DrSpecialty extends Model
{
    use HasFactory;
    protected $table= "dr_specialties";
    protected $guarded = 'id';
    public function doctors()
    {
        return $this->hasMany(Doctor::class, 'specialty_oms_id');
    }
      
    
}

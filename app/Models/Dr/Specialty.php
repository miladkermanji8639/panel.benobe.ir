<?php

namespace App\Models\Dr;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    use HasFactory;
    protected $table = "specialties";
    protected $fillable = [
        'sort',
        'level',
        'slug',
        'parent_id',
        'name',
        'page_title',
        'page_description',
        'status',
        'search_count',
    ];

    public function doctors()
    {
        return $this->belongsToMany(Doctor::class, 'doctor_specialty', 'specialty_id', 'doctor_id');
    }
}

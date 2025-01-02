<?php

namespace App\Models\Admin\Dashboard\Cities;

use App\Models\Dr\Doctor;
use Illuminate\Database\Eloquent\Model;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Zone extends Model
{
    use HasFactory, Sluggable;
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]

        ];
    }
    protected $table = 'zone';
    protected $guarded = 'id';
    public function doctors()
    {
        return $this->hasMany(Doctor::class, 'city_id');
    }
    public function province()  
    {  
        return $this->belongsTo(Zone::class, 'parent_id'); // برای ارتباط با استان  
    }
}

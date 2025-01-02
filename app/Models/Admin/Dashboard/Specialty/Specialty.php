<?php

namespace App\Models\Admin\Dashboard\Specialty;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    use HasFactory, Sluggable;
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
            ],

        ];

    }
    protected $table = 'specialty';
    protected $guarded = 'id';

}

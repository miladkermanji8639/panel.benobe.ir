<?php

namespace App\Models\Dr;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Otp extends Model
{
    use HasFactory;
    protected $table = "otp_doctors";

    

    protected $guarded = ['id'];


    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}

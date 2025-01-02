<?php

namespace App\Models\Dr;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InactiveDay extends Model
{
    use HasFactory;  

    protected $fillable = ['date', 'doctor_id']; // مشخص کردن فیلدهای قابل پر کردن  

    // تعریف رابطه با مدل Doctor  
    public function doctor()  
    {  
        return $this->belongsTo(Doctor::class);  
    }  
}

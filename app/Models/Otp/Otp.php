<?php

namespace App\Models\Otp;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Otp extends Model
{
    use HasFactory;

    protected $guarded = ['id'];


    public function user()
{
    return $this->belongsTo(User::class);
}
}

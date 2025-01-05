<?php

namespace App\Models\Dr;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoginAttempt extends Model
{
 use HasFactory;

 protected $fillable = [
  'doctor_id',
  'mobile',
  'attempts',
  'last_attempt_at',
  'lockout_until',
 ];

}
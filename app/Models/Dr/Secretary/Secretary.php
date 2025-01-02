<?php

namespace App\Models\Dr\Secretary;


use App\Models\User;
use Laravel\Sanctum\HasApiTokens;

use Laravel\Jetstream\HasProfilePhoto;
use Illuminate\Notifications\Notifiable;
use App\Models\Admin\Dashboard\Cities\Zone;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Secretary extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = "doctors";
    protected $fillable = [
        'first_name',
        'last_name',
        'city_id',
        'province_id',
        'mobile',
        'password',
        'national_code',
        'sex',
        'specialization',
        'address',
        'description',
        'license_number',
        'medical_system_code_type',
        'user_type',
        'status',
    ];
   
}


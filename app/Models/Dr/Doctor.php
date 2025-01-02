<?php
namespace App\Models\Dr;

use App\Models\User;
use App\Models\Dr\DrSpecialty;
use App\Models\Dr\SubSpecialty;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Jetstream\HasProfilePhoto;
use Illuminate\Notifications\Notifiable;
use App\Models\Admin\Dashboard\Cities\Zone;
use Laravel\Fortify\TwoFactorAuthenticatable;
use App\Models\Admin\Dashboard\Specialty\Specialty;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Cviebrock\EloquentSluggable\Sluggable;

class Doctor extends Authenticatable
{
    use HasApiTokens, HasFactory, HasProfilePhoto, Notifiable, TwoFactorAuthenticatable, Sluggable;

    /** 
     * The attributes that are mass assignable.
     * 
     * @var array 
     */
    protected $table = "doctors";
    protected $slugable='slug';
    protected $fillable = [
        'first_name',
        'last_name',
        'city_id',
        'province_id',
        'mobile',
        'slug',
        'password',
        'national_code',
        'sex',
        'specialty_id',
        'specialty_oms_id',
        'medical_system_code_type_id',
        'address',
        'description',
        'license_number',
        'user_type' => 0,
    ];

    /** 
     * The attributes that should be hidden for arrays.
     * 
     * @var array 
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /** 
     * The attributes that should be cast to native types.
     * 
     * @var array 
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /** 
     * The accessors to append to the model's array form.
     * 
     * @var array 
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => ['first_name', 'last_name']
            ]
        ];
    }

    public function getFullNameAttribute()
    {
        return "$this->first_name $this->last_name";
    }

    public function province()
    {
        return $this->belongsTo(Zone::class, 'province_id');
    }

    public function city()
    {
        return $this->belongsTo(Zone::class, 'city_id'); // ارتباط با شهر
    }

    public function specialties()
    {
        return $this->belongsToMany(Specialty::class, 'doctor_specialty', 'doctor_id', 'specialty_id');
    }

    public function specialty()
    {
        return $this->belongsTo(DrSpecialty::class, 'specialty_oms_id');
    }
}

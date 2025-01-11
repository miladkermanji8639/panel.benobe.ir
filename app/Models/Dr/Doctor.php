<?php
namespace App\Models\Dr;

use App\Models\User;
use App\Models\Dr\Specialty;
use App\Models\Dr\DrSpecialty;
use App\Models\Dr\SubSpecialty;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Jetstream\HasProfilePhoto;
use Illuminate\Notifications\Notifiable;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\Admin\Dashboard\Cities\Zone;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Doctor extends Authenticatable
{
    use HasApiTokens, HasFactory, HasProfilePhoto, Notifiable, TwoFactorAuthenticatable, Sluggable;

    /** 
     * The attributes that are mass assignable.
     * 
     * @var array 
     */
    protected $table = "doctors";
    protected $slugable = 'slug';
    protected $fillable = [
        'uuid',
        'first_name',
        'last_name',
        'display_name',
        'date_of_birth',
        'sex',
        'mobile',
        'email',
        'alternative_mobile',
        'national_code',
        'password',
        'static_password_enabled',
        'license_number',
        'academic_degree_id',
        'specialty_id',
        'medical_system_code_type_id',
        'province_id',
        'city_id',
        'address',
        'postal_code',
        'slug',
        'profile_photo_path',
        'bio',
        'description',
        'is_active',
        'is_verified',
        'profile_completed',
        'status',
        'user_type',
        'api_token',
        'two_factor_secret', // فیلد برای ذخیره کلید مخفی
        'two_factor_enabled',
    ];

    protected $hidden = [
        'password',
        'two_factor_secret',
        'remember_token',
        'api_token'
    ];

    protected $casts = [
        'date_of_birth' => 'date',
        'is_active' => 'boolean',
        'is_verified' => 'boolean',
        'profile_completed' => 'boolean',
        'mobile_verified_at' => 'datetime',
        'email_verified_at' => 'datetime',
        'last_login_at' => 'datetime'
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
    public function clinics()
    {
        return $this->hasMany(Clinic::class);
    }
    public function province()
    {
        return $this->belongsTo(Zone::class, 'province_id');
    }

    public function city()
    {
        return $this->belongsTo(Zone::class, 'city_id'); // ارتباط با شهر
    }
    public function academicDegree()
    {
        return $this->belongsTo(AcademicDegree::class, 'academic_degree_id');
    }
    public function specialties()
    {
        return $this->belongsToMany(SubSpecialty::class, 'doctor_specialty', 'doctor_id', 'specialty_id')
            ->withPivot('academic_degree_id', 'specialty_title'); // اضافه کردن فیلدهای اضافی
    }
    public function messengers()
    {
        return $this->hasMany(DoctorMessenger::class);
    }




    public function subSpecialty()
    {
        return $this->belongsTo(SubSpecialty::class, 'sub_specialty_id');
    }
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
    public function doctorSpecialties()
    {
        return $this->hasMany(DoctorSpecialty::class);
    }
    public function isProfileComplete(): bool
    {
        return $this->first_name &&
            $this->last_name &&
            $this->national_code &&
            $this->license_number &&
            $this->doctorSpecialties()->where('is_main', true)->exists() &&
            $this->uuid &&
            $this->messengers()->exists() &&
            $this->messengers->every(function ($messenger) {
                return $messenger->phone_number || $messenger->username;
            });
    }

    public function getIncompleteProfileSections(): array
    {
        $incompleteSections = [];

        if (!$this->first_name) {
            $incompleteSections[] = 'نام';
        }
        if (!$this->last_name) {
            $incompleteSections[] = 'نام خانوادگی';
        }
        if (!$this->national_code) {
            $incompleteSections[] = 'کد ملی';
        }
        if (!$this->license_number) {
            $incompleteSections[] = 'شماره نظام پزشکی';
        }
        if (!$this->doctorSpecialties()->where('is_main', true)->exists()) {
            $incompleteSections[] = 'تخصص و درجه علمی';
        }
        if (!$this->uuid) {
            $incompleteSections[] = 'آیدی';
        }
        if (
            !$this->messengers()->exists() || $this->messengers->contains(function ($messenger) {
                return !$messenger->phone_number && !$messenger->username;
            })
        ) {
            $incompleteSections[] = 'پیام‌رسان‌ها';
        }

        return $incompleteSections;
    }
   

}

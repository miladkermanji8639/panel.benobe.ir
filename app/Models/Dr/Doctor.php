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
        'api_token'
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

   



    public function subSpecialty()
    {
        return $this->belongsTo(SubSpecialty::class, 'sub_specialty_id');
    }
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeVerified($query)
    {
        return $query->where('is_verified', true);
    }
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    // UUID Generation
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = 'DR-' . str_pad(static::max('id') + 1, 6, '0', STR_PAD_LEFT);
            }
        });
    }
}

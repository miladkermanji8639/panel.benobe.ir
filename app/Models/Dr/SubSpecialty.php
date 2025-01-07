<?php

namespace App\Models\Dr;

use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SubSpecialty extends Model
{
 use HasFactory;

 protected $table = 'sub_specialties';

 protected $fillable = [
  'name',
  'description',
  'status'
 ];

 protected $casts = [
  'status' => 'integer',
  'created_at' => 'datetime',
  'updated_at' => 'datetime'
 ];

 // Relationship with Doctors
 public function doctors()
 {
  return $this->hasMany(Doctor::class, 'sub_specialty_id');
 }

 // Relationship with Main Specialty (اگر دارید)

 // متد کش‌دار برای گرفتن لیست تخصص‌ها
 public static function getOptimizedList()
 {
  return Cache::remember(
   'sub_specialties_optimized_list',
   now()->addHours(24),
   function () {
    $specialties = self::query()
     ->select('id', 'name')
     ->where('status', 1)
     ->orderBy('name')
     ->get();

    // اگر خالی بود، مقادیر پیش‌فرض برگردان
    return $specialties->isNotEmpty()
     ? $specialties
     : collect([
      (object) ['id' => '', 'name' => 'تخصصی انتخاب نشده']
     ]);
   }
  );
 }

 public function specialty()
 {
  return $this->belongsTo(Specialty::class, 'specialty_id');
 }

 // Scope برای وضعیت فعال
 public function scopeActive($query)
 {
  return $query->where('status', 1);
 }

 // Scope برای جستجو
 public function scopeSearch($query, $term)
 {
  return $query->where('name', 'LIKE', "%{$term}%");
 }

 // Accessor برای نام با فرمت خاص
 public function getFormattedNameAttribute()
 {
  return "تخصص: " . $this->name;
 }

 // Mutator برای نام
 public function setNameAttribute($value)
 {
  $this->attributes['name'] = trim($value);
 }

 // Static method برای گرفتن لیست فعال
 public static function getActiveList()
 {
  return self::active()->orderBy('name')->get();
 }
}
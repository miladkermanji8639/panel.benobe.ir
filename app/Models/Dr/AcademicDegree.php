<?php
namespace App\Models\Dr;

use App\Models\Dr\Doctor;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class AcademicDegree extends Model
{
 protected $table = 'academic_degrees';

 protected $fillable = [
  'title',
  'category',
  'description',
  'is_active',
  'sort_order'
 ];

 protected $casts = [
  'is_active' => 'boolean'
 ];

 public function doctors()
 {
  return $this->hasMany(Doctor::class, 'academic_degree_id');
 }

 // Scope برای فعال‌ها
 public function scopeActive($query)
 {
  return $query->where('is_active', true);
 }
}
<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class SpecialtiesSeeder extends Seeder
{
    public function run(): void
    {
        // خواندن محتوای فایل JSON
        $json = File::get(storage_path('app/takhsos-mini-list.json'));
        $data = json_decode($json, true);

        // بررسی اینکه آیا داده‌ها به درستی بارگذاری شده‌اند
        if (is_array($data)) {
            foreach ($data as $specialty) {
                DB::table('specialties')->insert([
                    'name' => $specialty['name'], // نام تخصص
                    'slug' => $specialty['slug'], // استفاده از slug موجود در JSON
                    'level' => $specialty['level'], // سطح تخصص
                    'parent_id' => $specialty['parent_id'], // شناسه والد تخصص
                    'status' => $specialty['status'], // وضعیت (تعداد 1 برای فعال)
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        } else {
            // اگر داده‌ها به درستی بارگذاری نشده‌اند، یک پیغام خطا نمایش داده شود
            echo "داده‌های تخصص‌ها پیدا نشد.";
        }
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class SubSpecialtiesSeeder extends Seeder
{
    public function run(): void
    {
        // خواندن محتوای فایل JSON
        $json = File::get(storage_path('app/floships_and_specialties.json'));
        $data = json_decode($json, true);

        // بررسی اینکه آیا داده‌ها به درستی بارگذاری شده‌اند
        if (isset($data['specialties']) && is_array($data['specialties'])) {
            foreach ($data['specialties'] as $specialty) {
                DB::table('sub_specialties')->insert([
                    'name' => $specialty['name'], // نام تخصص
                    'description' => $specialty['description'] ?? null,
                    'status' => 1, // توضیحات تخصص (اختیاری)
                    'created_at' => now(), // زمان ایجاد رکورد
                    'updated_at' => now()  // زمان به روز رسانی رکورد
                ]);
            }
        } else {
            // اگر داده‌ها به درستی بارگذاری نشده‌اند، یک پیغام خطا نمایش داده شود
            echo "داده‌های تخصص‌ها پیدا نشد.";
        }
    }
}

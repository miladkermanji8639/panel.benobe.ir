<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class MedicalSystemCodeTypeSeeder extends Seeder
{
    public function run(): void
    {
        // خواندن محتوای فایل JSON
        $json = File::get(storage_path('app/MedicalSystemCodeType.json'));
        $data = json_decode($json, true);

        // بررسی اینکه آیا داده‌ها به درستی بارگذاری شده‌اند
        if (isset($data['msct']) && is_array($data['msct'])) {
            foreach ($data['msct'] as $specialty) {
                DB::table('medical_system_code_types')->insert([
                    'name' => $specialty['name'], //ص (اختیاری)
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

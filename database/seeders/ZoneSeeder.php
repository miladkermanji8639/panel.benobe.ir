<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ZoneSeeder extends Seeder
{
    public function run(): void
    {
        // خواندن محتوای فایل JSON
        $json = File::get(storage_path('app/cities.json'));
        $data = json_decode($json, true);

        foreach ($data as $provinceData) {
            // اضافه کردن استان
            $provinceId = DB::table('zone')->insertGetId([
                'name' => $provinceData['province'],
                'parent_id' => null,
                'level' => 1, // 1 = استان
                'sort' => 1,
                'latitude' => null,
                'longitude' => null,
                'population' => null,
                'area' => null,
                'postal_code' => null,
                'status' => 1,
                'slug' => Str::slug($provinceData['province']),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // اضافه کردن شهرهای مربوط به استان
            foreach ($provinceData['cities'] as $city) {
                DB::table('zone')->insert([
                    'name' => $city,
                    'parent_id' => $provinceId, // ارتباط با استان
                    'level' => 2, // 2 = شهر
                    'sort' => 1,
                    'latitude' => null,
                    'longitude' => null,
                    'population' => null,
                    'area' => null,
                    'postal_code' => null,
                    'status' => 1,
                    'slug' => Str::slug($city),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}

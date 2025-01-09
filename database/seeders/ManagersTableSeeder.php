<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;




class ManagersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('managers')->insert([
            'first_name' => 'میلاد',
            'last_name' => 'کرماجی',
            'date_of_birth' => null,
            'email' => 'miladkermaji09@gmail.com',
            'mobile' => '09182718639',
            'national_code' => null,
            'sex' => null,
            'status' => '0',
            'email_verified_at' => null,
            'password' => '$2y$12$Gg8C1uOPiN/l/g/JsOk.pOiILYO08pzj5GMbOnkT.PY.Sjn6to.6O', // مطمئن شوید که پسورد را به درستی رمزگذاری کنید
            'avatar' => null,
            'address' => null,
            'permission' => '1',
        ]);
        
    }
}

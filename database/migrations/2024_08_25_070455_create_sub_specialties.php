<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('sub_specialties', function (Blueprint $table) {
            $table->id(); // شناسه یکتا
            $table->string('name'); // نام تخصص
            $table->text('description')->nullable(); // توضیحات تخصص (اختیاری)
            $table->tinyInteger('status')->default(0);

            $table->timestamps(); // زمان ایجاد و به روز رسانی رکورد
        });
         // اجرای Seeder به صورت خودکار
         Artisan::call('db:seed', [
            '--class' => 'SubSpecialtiesSeeder',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_specialties');
        
    }
};

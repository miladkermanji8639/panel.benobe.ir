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
    public function up(): void
    {
        Schema::create('specialties', function (Blueprint $table) {
            $table->id();
            $table->mediumInteger('sort')->default('1');
            $table->tinyInteger('level'); 
            $table->string('slug')->nullable();
            $table->integer('parent_id')->nullable();
            $table->string('name')->nullable();
            $table->tinyInteger('status')->default('0');// تعداد جستجوها  
            $table->timestamps();
        });
        // اجرای Seeder به صورت خودکار
        Artisan::call('db:seed', [
            '--class' => 'SpecialtiesSeeder',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('specialties');
    }
};

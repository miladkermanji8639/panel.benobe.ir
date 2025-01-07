<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('academic_degrees', function (Blueprint $table) {
            $table->id();
            $table->string('title')->unique();
            $table->string('category')->nullable(); // برای دسته‌بندی مانند دانشجو، مدرک رسمی
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->nullable(); // برای مرتب‌سازی
            $table->timestamps();
        });

        // داده‌های اولیه
        $academicDegrees = [
            ['title' => 'کاردان', 'category' => 'مدرک', 'sort_order' => 1],
            ['title' => 'کارشناس', 'category' => 'مدرک', 'sort_order' => 2],
            ['title' => 'کارشناسی ارشد', 'category' => 'مدرک', 'sort_order' => 3],
            ['title' => 'دانشجوی دکترا', 'category' => 'دانشجو', 'sort_order' => 4],
            ['title' => 'دکترا', 'category' => 'مدرک', 'sort_order' => 5],
            ['title' => 'دانشجوی تخصص', 'category' => 'دانشجو', 'sort_order' => 6],
            ['title' => 'متخصص', 'category' => 'مدرک', 'sort_order' => 7],
            ['title' => 'دانشجوی دکترای تخصصی', 'category' => 'دانشجو', 'sort_order' => 8],
            ['title' => 'دکترای تخصصی', 'category' => 'مدرک', 'sort_order' => 9],
            ['title' => 'دانشجوی فوق تخصص', 'category' => 'دانشجو', 'sort_order' => 10],
            ['title' => 'فوق تخصص', 'category' => 'مدرک', 'sort_order' => 11],
            ['title' => 'دانشجوی فلوشیپ', 'category' => 'دانشجو', 'sort_order' => 12],
            ['title' => 'فلوشیپ', 'category' => 'مدرک', 'sort_order' => 13],
            ['title' => 'نامشخص', 'category' => 'سایر', 'sort_order' => 14],
            ['title' => 'مشاور', 'category' => 'مدرک', 'sort_order' => 15],
        ];

        // در میگریشن یا سیدر
        DB::table('academic_degrees')->insert($academicDegrees);

      
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('academic_degrees');
    }
};

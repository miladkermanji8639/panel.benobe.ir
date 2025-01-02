<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointment_patterns', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id');
            $table->enum('day', ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']);
            $table->time('start_time');
            $table->time('end_time');
            $table->string('title')->nullable(); // فیلد اختیاری عنوان
            $table->integer('slot')->default(30); // فیلد اسلات با مقدار پیشفرض ۳۰ دقیقه
            $table->integer('max_appointments')->nullable(); // فیلد تعداد پذیرش
            $table->boolean('auto_schedule')->default(true);
            $table->boolean('include_holidays')->default(false);
            $table->boolean('is_active')->default(true); // ستون جدید برای فعال/غیرفعال کردن الگو
            $table->timestamps();

            $table->foreign('doctor_id')->references('id')->on('doctors')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointment_patterns');
    }
};

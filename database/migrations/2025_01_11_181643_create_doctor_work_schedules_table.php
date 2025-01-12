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
        Schema::create('doctor_work_schedules', function (Blueprint $table) {
            $table->id(); // شناسه منحصر به فرد برای هر رکورد

            $table->unsignedBigInteger('doctor_id'); // شناسه پزشک

            // تعریف روزهای هفته به صورت محدود
            $table->enum('day', [
                'saturday',
                'sunday',
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday'
            ]); // روزهای هفته با محدودیت انتخاب

            $table->boolean('is_working')->default(false); // آیا پزشک در این روز کار می‌کند؟

            $table->json('work_hours')->nullable()->comment('زمان‌های کاری روزانه در فرمت JSON');
            // ذخیره‌سازی ساعات کاری به صورت جیسون برای انعطاف‌پذیری بیشتر
            // مثال: [{"start": "08:00", "end": "12:00"}, {"start": "14:00", "end": "18:00"}]

            $table->json('appointment_settings')->nullable()->comment('تنظیمات نوبت‌دهی');
            // تنظیمات اختصاصی نوبت‌دهی برای هر روز
            // مثال: {"max_appointments": 10, "appointment_duration": 15}

            $table->timestamps(); // زمان ایجاد و آخرین بروزرسانی

            // تعریف کلید خارجی برای ارتباط با جدول پزشکان
            $table->foreign('doctor_id')
                ->references('id')
                ->on('doctors')
                ->onDelete('cascade'); // حذف رکوردهای مرتبط در صورت حذف پزشک

            // محدودیت یکتایی برای جلوگیری از تکرار رکوردها
            $table->unique(['doctor_id', 'day']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctor_work_schedules');
    }
};

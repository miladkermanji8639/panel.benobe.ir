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
        Schema::create('doctor_appointment_configs', function (Blueprint $table) {
            $table->id(); // شناسه منحصر به فرد

            $table->unsignedBigInteger('doctor_id'); // شناسه پزشک

            $table->boolean('auto_scheduling')->default(true);
            // آیا نوبت‌دهی به صورت خودکار انجام شود؟

            $table->integer('calendar_days')->default(30);
            // تعداد روزهای باز در تقویم نوبت‌دهی

            $table->boolean('online_consultation')->default(false);
            // آیا مشاوره آنلاین فعال باشد؟

            $table->boolean('holiday_availability')->default(false);
            // آیا در تعطیلات امکان نوبت‌دهی وجود دارد؟

            $table->integer('default_appointment_duration')->default(15);
            // مدت زمان پیش‌فرض هر نوبت (دقیقه)

            $table->json('consultation_types')->nullable();
            // انواع مشاوره در فرمت JSON
            // مثال: ["general", "specialized", "emergency"]

            $table->timestamps(); // زمان ایجاد و آخرین بروزرسانی

            // تعریف کلید خارجی برای ارتباط با جدول پزشکان
            $table->foreign('doctor_id')
                ->references('id')
                ->on('doctors')
                ->onDelete('cascade'); // حذف تنظیمات در صورت حذف پزشک

            // محدودیت یکتایی - فقط یک رکورد برای هر پزشک
            $table->unique('doctor_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctor_appointment_configs');
    }
};

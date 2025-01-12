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
        Schema::create('appointment_slots', function (Blueprint $table) {
            $table->id(); // شناسه منحصر به فرد

            $table->unsignedBigInteger('work_schedule_id')->nullable(); // شناسه برنامه کاری

            $table->time('start_time')->nullable(); // زمان شروع اسلات
            $table->time('end_time')->nullable(); // زمان پایان اسلات

            $table->integer('max_appointments')->default(1);
            // حداکثر تعداد نوبت‌ها در این اسلات

            $table->enum('slot_type', ['morning', 'afternoon', 'evening'])->default('morning');
            // نوع اسلات (صبح، عصر، شب)

            $table->boolean('is_active')->default(true);
            // آیا این اسلات فعال است؟

            // تعریف کلید خارجی برای ارتباط با جدول برنامه کاری
            $table->foreign('work_schedule_id')
                ->references('id')
                ->on('doctor_work_schedules')
                ->onDelete('cascade'); // حذف اسلات‌ها در صورت حذف برنامه کاری
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointment_slots');
    }
};

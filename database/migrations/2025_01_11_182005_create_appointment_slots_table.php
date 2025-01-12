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
            $table->json('time_slots')->nullable();

            $table->integer('max_appointments')->default(1);
            // حداکثر تعداد نوبت‌ها در این اسلات
            $table->integer('current_appointments')->default(0);
            $table->boolean('is_active')->default(true);
            $table->boolean('is_booked')->default(false);

            $table->date('slot_date')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['work_schedule_id', 'slot_date']);
            $table->index('slot_date');
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

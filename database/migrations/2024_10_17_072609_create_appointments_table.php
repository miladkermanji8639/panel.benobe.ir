<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id');
            $table->unsignedBigInteger('pattern_id')->nullable();
            $table->unsignedBigInteger('patient_id')->nullable(); // شناسه بیمار قابل انتخاب است
            $table->unsignedBigInteger('insurance_id')->nullable(); // اضافه کردن فیلد insurance_id
            $table->enum('appointment_type', ['in_person', 'video', 'phone']); // نوع نوبت‌دهی
            $table->date('appointment_date'); // تاریخ نوبت
            $table->time('start_time'); // زمان شروع نوبت
            $table->time('end_time'); // زمان پایان نوبت
            $table->enum('status', ['scheduled', 'completed', 'cancelled'])->default('scheduled'); // وضعیت نوبت
            $table->text('notes')->nullable(); // یادداشت‌های اضافی
            $table->text('title')->nullable(); // یادداشت‌های اضافی
            $table->string('tracking_code')->nullable()->unique();
            $table->integer('max_appointments')->nullable(); // فیلد تعداد پذیرش
             // کد پیگیری برای هر نوبت
            $table->decimal('fee', 8, 2)->nullable(); // هزینه نوبت
            $table->enum('appointment_category', ['initial', 'follow_up'])->nullable(); // دسته‌بندی نوبت‌ها
            $table->string('location')->nullable(); // آدرس نوبت
            $table->boolean('notification_sent')->default(false);
            $table->boolean('include_holidays')->default(false);
            $table->json('disabled_days')->nullable(); // وضعیت ارسال یادآوری نوبت
            $table->timestamps();

            // تعریف کلیدهای خارجی
            $table->foreign('doctor_id')->references('id')->on('doctors')->onDelete('cascade');
            $table->foreign('patient_id')->references('id')->on('users')->onDelete('cascade'); // ارتباط با جدول کاربران
            $table->foreign('insurance_id')->references('id')->on('insurances')->onDelete('set null'); // ارتباط با جدول بیمه
            $table->foreign('pattern_id')->references('id')->on('appointment_patterns')->onDelete('cascade');

        });
    }

    public function down()
    {
        
        Schema::dropIfExists('appointments');
    }
};

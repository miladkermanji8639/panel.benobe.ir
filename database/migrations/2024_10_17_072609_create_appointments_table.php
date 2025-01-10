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
            $table->unsignedBigInteger('patient_id')->nullable();
            $table->unsignedBigInteger('insurance_id')->nullable();

            // فیلدهای جدید
            $table->integer('duration')->nullable(); // مدت زمان نوبت (دقیقه)
            $table->enum('consultation_type', ['general', 'specialized', 'emergency'])->nullable();
            $table->enum('priority', ['low', 'medium', 'high'])->default('medium');
            $table->enum('payment_status', ['pending', 'paid', 'unpaid'])->default('pending');

            $table->enum('appointment_type', ['in_person', 'online', 'phone']);
            $table->date('appointment_date');
            $table->time('start_time');
            $table->time('end_time');

            // زمان دقیق رزرو
            $table->timestamp('reserved_at')->nullable();
            $table->timestamp('confirmed_at')->nullable();

            $table->enum('status', ['scheduled', 'completed', 'cancelled'])->default('scheduled');
            $table->text('notes')->nullable();
            $table->text('title')->nullable();
            $table->string('tracking_code')->nullable()->unique();
            $table->integer('max_appointments')->nullable();
            $table->decimal('fee', 8, 2)->nullable();
            $table->enum('appointment_category', ['initial', 'follow_up'])->nullable();
            $table->string('location')->nullable();
            $table->boolean('notification_sent')->default(false);
            $table->boolean('include_holidays')->default(false);
            $table->json('disabled_days')->nullable();
            $table->timestamps();

            $table->foreign('doctor_id')->references('id')->on('doctors')->onDelete('cascade');
            $table->foreign('patient_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('insurance_id')->references('id')->on('insurances')->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::dropIfExists('appointments');
    }
};

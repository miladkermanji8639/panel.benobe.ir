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
        Schema::create('doctor_messengers', function (Blueprint $table) {
            $table->id(); // کلید اصلی
            $table->unsignedBigInteger('doctor_id'); // کلید خارجی به جدول doctors
            $table->string('messenger_type'); // نوع پیام‌رسان (مثلاً ita، whatsapp و ...)
            $table->string('phone_number')->nullable(); // شماره موبایل
            $table->string('username')->nullable(); // نام کاربری
            $table->boolean('is_secure_call')->default(false); // تماس امن (فعال/غیرفعال)
            $table->timestamps(); // created_at و updated_at

            // ایجاد رابطه با جدول doctors
            $table->foreign('doctor_id')
                ->references('id')
                ->on('doctors')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctor_messengers');
    }
};

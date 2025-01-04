<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('login_attempts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id')->nullable(); // برای ارتباط با مدل دکتر
            $table->string('mobile')->index();
            $table->integer('attempts')->default(0);
            $table->timestamp('last_attempt_at')->nullable();
            $table->timestamp('lockout_until')->nullable();
            $table->timestamps();

            // ایندکس‌گذاری برای جستجوی سریع‌تر
            $table->unique(['doctor_id', 'mobile']);

            // ارتباط با جدول دکترها
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
        Schema::dropIfExists('login_attempts');
    }
};

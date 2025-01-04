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
        Schema::create('auto_appointments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id'); // شناسه دکتر
            $table->boolean('enabled')->default(false); // فعال یا غیرفعال بودن نوبت‌دهی خودکار
            $table->json('disabled_days')->nullable(); // روزهای غیر فعال برای نوبت‌دهی خودکار
            $table->timestamps();

            $table->foreign('doctor_id')->references('id')->on('doctors')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auto_appointments');
    }
};

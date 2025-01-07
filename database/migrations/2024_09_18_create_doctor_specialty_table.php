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
        Schema::create('doctor_specialty', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id');
            $table->unsignedBigInteger('specialty_id');
            $table->unsignedBigInteger('academic_degree_id')->nullable(); // فیلد درجه علمی
            $table->string('specialty_title')->nullable(); // فیلد عنوان تخصص
            $table->boolean('is_main')->default(0);
            $table->timestamps();

            $table->foreign('doctor_id')->references('id')->on('doctors')->onDelete('cascade');
            $table->foreign('academic_degree_id')->references('id')->on('academic_degrees')->onDelete('cascade');
            $table->foreign('specialty_id')->references('id')->on('sub_specialties')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctor_specialty');
    }
};

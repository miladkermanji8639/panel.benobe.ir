<?php
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {
    public function up()
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->nullable()->unique();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('display_name')->nullable()->comment('نام نمایشی');
            $table->date('date_of_birth')->nullable();
            $table->enum('sex', ['male', 'female', 'other'])->nullable();
            $table->string('mobile')->unique()->nullable();
            $table->string('email')->unique()->nullable();
            $table->string('alternative_mobile')->nullable();
            $table->string('national_code')->unique()->nullable();
            $table->string('password')->nullable();
            $table->boolean('static_password_enabled')->default(false)->comment('آیا رمز عبور ثابت فعال است؟');
            $table->string('two_factor_secret')->nullable();
            $table->boolean('two_factor_secret_enabled')->default(false)->comment('آیا رمز عبور ثابت فعال است؟');
            $table->timestamp('two_factor_confirmed_at')->nullable();
            $table->string('license_number')->unique()->nullable();
            $table->unsignedBigInteger('academic_degree_id')->nullable();
            $table->unsignedBigInteger('specialty_id')->nullable();
            $table->unsignedBigInteger('medical_system_code_type_id')->nullable();
            $table->unsignedBigInteger('province_id')->nullable();
            $table->unsignedBigInteger('city_id')->nullable();
            $table->text('address')->nullable();
            $table->string('postal_code', 20)->nullable();
            $table->string('slug')->unique()->nullable();
            $table->text('profile_photo_path')->nullable();
            $table->text('bio')->nullable();
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_verified')->default(false);
            $table->boolean('profile_completed')->default(false);
            $table->tinyInteger('status')->default(0)->comment('وضعیت حساب');
            $table->enum('user_type', ['doctor', 'secretary'])->default('doctor');
            $table->string('api_token', 80)->unique()->nullable();
            $table->rememberToken();
            $table->timestamp('mobile_verified_at')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('last_login_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('province_id')->references('id')->on('zone')->onDelete('set null');
            $table->foreign('city_id')->references('id')->on('zone')->onDelete('set null');

            $table->foreign('specialty_id')->references('id')->on('sub_specialties')->onDelete('set null');
            $table->foreign('medical_system_code_type_id')->references('id')->on('medical_system_code_types')->onDelete('set null');
            $table->foreign('academic_degree_id')
                ->references('id')
                ->on('academic_degrees')
                ->onDelete('set null');
        });
        DB::statement('
        UPDATE doctors 
        SET uuid = CONCAT("DR-", id)
        WHERE uuid IS NULL
    ');

    }

    public function down()
    {
        Schema::dropIfExists('doctors');
    }
};
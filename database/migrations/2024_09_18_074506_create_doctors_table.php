<?php  
use Illuminate\Database\Migrations\Migration;  
use Illuminate\Database\Schema\Blueprint;  
use Illuminate\Support\Facades\Schema;  

return new class extends Migration  
{  
    public function up()  
    {  
        Schema::create('doctors', function (Blueprint $table) {  
            $table->id();  
            $table->string('first_name')->nullable();  
            $table->string('last_name')->nullable();  
            $table->unsignedBigInteger('city_id')->nullable(); // شناسه شهر  
            $table->unsignedBigInteger('province_id')->nullable(); // شناسه استان  
            // سایر فیلدها  
            $table->string('email')->unique()->nullable();  
            $table->string('mobile')->unique()->nullable();  
            $table->string('password')->nullable();
            $table->string('two_factor_password')->nullable()->default('');
            $table->string('national_code')->unique()->nullable();  
            $table->enum('sex', ['male', 'female'])->nullable();  
            $table->string('slug')->unique()->nullable();  
            $table->text('profile_photo_path')->nullable()->comment('avatar');  
            $table->text('address')->nullable();  
            $table->text('bio')->nullable();  
            $table->text('description')->nullable();  
            $table->string('license_number')->unique()->nullable();  
            $table->unsignedBigInteger('medical_system_code_type_id')->nullable(); // Foreign key for medical system code type  
            $table->unsignedBigInteger('specialty_id')->nullable(); // Foreign key for specialties  
            $table->unsignedBigInteger('specialty_oms_id')->nullable(); // Foreign key for specialties  
            $table->unsignedBigInteger('sub_specialty_id')->nullable(); // Foreign key برای زیرمجموعه تخصص‌ها  
            $table->date('date_of_birth')->nullable();  
            $table->boolean('is_active')->default(true);  
            $table->tinyInteger('activation')->default(0)->comment('0 => deactive 1 => active');  
            $table->timestamp('mobile_verified_at')->nullable();  
            $table->timestamp('activation_date')->nullable();  
            $table->tinyInteger('user_type')->default(0)->comment('0 => dr 1 => secretary');
            $table->boolean('auto_appointment_enabled')->default(false); // فعال‌سازی نوبت‌دهی اینترنتی خودکار
            $table->text('disabled_days_for_auto_appointment')->nullable();  
            $table->tinyInteger('status')->default(0);  
            
            $table->rememberToken();  
            $table->timestamps();  
            $table->softDeletes();  

            // تعریف کلیدهای خارجی  
            $table->foreign('city_id')->references('id')->on('zone')->onDelete('set null');  
            $table->foreign('province_id')->references('id')->on('zone')->onDelete('set null');  
            $table->foreign('medical_system_code_type_id')->references('id')->on('table_medical_system_code_type')->onDelete('set null');  
            $table->foreign('sub_specialty_id')->references('id')->on('sub_specialties')->onDelete('set null');
            $table->foreign('specialty_id')->references('id')->on('specialty')->onDelete('set null');  
            $table->foreign('specialty_oms_id')->references('id')->on('dr_specialties')->onDelete('set null');  
        });  
    }  

    public function down()
    {
        Schema::table('doctors', function (Blueprint $table) {
            $table->dropColumn('auto_appointment_enabled');
            $table->dropColumn('disabled_days_for_auto_appointment');
        });
    }  
};
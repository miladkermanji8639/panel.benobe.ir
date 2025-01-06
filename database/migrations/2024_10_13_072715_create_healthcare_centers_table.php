<?php

use Illuminate\Database\Migrations\Migration;  
use Illuminate\Database\Schema\Blueprint;  
use Illuminate\Support\Facades\Schema;  

class CreateHealthcareCentersTable extends Migration  
{  
    /**  
     * Run the migrations.  
     *  
     * @return void  
     */  
    public function up()  
    {  
        Schema::create('healthcare_centers', function (Blueprint $table) {  
            $table->id();  
            $table->string('name'); // نام مرکز درمانی  
            $table->string('address');
            $table->unsignedBigInteger('city_id')->nullable(); // شناسه شهر  
            $table->unsignedBigInteger('province_id')->nullable();
            
            $table->string('phone')->nullable(); // شماره تلفن  
            $table->string('email')->nullable(); // ایمیل (اختیاری)  
            $table->string('sayam_code');
            $table->text('avatar')->nullable();
            $table->unsignedBigInteger('specialty_id')->nullable(); // Foreign key for specialties  
             //  )  
            $table->enum('type', ['hospital', 'clinic']); // نوع مرکز  
            $table->text('description')->nullable(); // توضیحات (اختیاری)  
            $table->boolean('is_active')->default(0);
            $table->tinyInteger('status')->default(0); // وضعیت (فعال یا غیرفعال)  
             // وضعیت فعال یا غیرفعال  
            $table->timestamps();
            $table->softDeletes();  
            $table->foreign('city_id')->references('id')->on('zone')->onDelete('set null');  
            $table->foreign('province_id')->references('id')->on('zone')->onDelete('set null');
            $table->foreign('specialty_id')->references('id')->on('specialties')->onDelete('set null');
            // زمان‌های ایجاد و به‌روزرسانی  
        });     // آدرس مرکز   
    }  

    /**  
     * Reverse the migrations.  
     *  
     * @return void  
     */  
    public function down()  
    {  
        Schema::dropIfExists('healthcare_centers');  
    }  
}
<?php  

use Illuminate\Database\Migrations\Migration;  
use Illuminate\Database\Schema\Blueprint;  
use Illuminate\Support\Facades\Schema;  

return new class extends Migration  
{  
    public function up()  
    {  
        Schema::create('sub_specialties', function (Blueprint $table) {  
            $table->id(); // شناسه یکتا  
            $table->unsignedBigInteger('dr_specialty_id'); // Foreign key به جدول dr_specialties  
            $table->string('name'); // نام زیرمجموعه تخصص  
            $table->text('description')->nullable(); // توضیحات زیرمجموعه تخصص (اختیاری)  
            $table->tinyInteger('status')->default(0); // وضعیت زیرمجموعه تخصص  

            $table->timestamps();  

            // تعریف کلید خارجی  
            $table->foreign('dr_specialty_id')->references('id')->on('dr_specialties')->onDelete('cascade');  
        });  
    }  

    public function down()  
    {  
        Schema::dropIfExists('sub_specialties');  
    }  
};
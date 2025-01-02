<?php

use Illuminate\Database\Migrations\Migration;  
use Illuminate\Database\Schema\Blueprint;  
use Illuminate\Support\Facades\Schema;  

class CreateInactiveDaysTable extends Migration  
{  
    public function up()  
    {  
        Schema::create('inactive_days', function (Blueprint $table) {  
            $table->id();  
            $table->json('dates'); // تاریخ غیر فعال  
            $table->unsignedBigInteger('doctor_id'); // کلید خارجی دکتر  
            $table->timestamps(); // timestamps برای created_at و updated_at  
            
            // ایجاد رابطه کلید خارجی  
            $table->foreign('doctor_id')->references('id')->on('doctors')->onDelete('cascade');  
        });  
    }  

    public function down()  
    {  
        Schema::dropIfExists('inactive_days');  
    }  
}
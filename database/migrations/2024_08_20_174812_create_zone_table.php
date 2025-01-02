<?php  
use Illuminate\Support\Facades\Schema;  
use Illuminate\Support\Facades\Artisan;  
use Illuminate\Database\Schema\Blueprint;  
use Illuminate\Database\Migrations\Migration;  

return new class extends Migration  
{  
    public function up(): void  
    {  
        Schema::create('zone', function (Blueprint $table) {  
            $table->id();  
            $table->string('name'); // نام زون (شهر یا استان)  
            $table->unsignedBigInteger('parent_id')->nullable(); // برای ارتباط با استان (اگر زون یک شهر باشد)  
            $table->tinyInteger('level'); // 1 => استان, 2 => شهر  
            $table->mediumInteger('sort')->default(1); // ترتیب  
            $table->decimal('latitude')->nullable(); // عرض جغرافیایی  
            $table->decimal('longitude')->nullable(); // طول جغرافیایی  
            $table->integer('population')->nullable(); // جمعیت  
            $table->decimal('area')->nullable(); // مساحت  
            $table->string('postal_code')->nullable(); // کد پستی  
            $table->integer('price_shipping')->nullable(); // هزینه ارسال  
            $table->tinyInteger('status')->default(0); // وضعیت (فعال یا غیرفعال)  
            $table->string('slug')->nullable(); // اسلاگ  
            $table->integer('search_count')->default(0); // تعداد جستجوها  
            $table->timestamps();  
        });  
         // اجرای Seeder به صورت خودکار  
         Artisan::call('db:seed', [  
            '--class' => 'ZoneSeeder',  
        ]);  
    }  

    public function down(): void  
    {  
        Schema::dropIfExists('zone');  
    }  
};
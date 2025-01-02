<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('managers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->date('date_of_birth')->nullable();
            $table->string('email')->unique();
            $table->string('mobile')->nullable()->unique();
            $table->string('national_code')->nullable()->unique();
            $table->enum('sex', ['male', 'female'])->nullable();
            $table->tinyInteger('status')->default('0');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->text('avatar')->nullable();
            $table->text('address')->nullable();
            $table->integer('permission')->default('1');

            $table->rememberToken();
            $table->timestamps();
        });
        Artisan::call('db:seed', [
            '--class' => 'ManagersTableSeeder',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('managers');
    }
};

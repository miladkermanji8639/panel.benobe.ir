<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        \App\Models\Admin\Manager::factory(1)->create();

        \App\Models\Admin\Manager::factory()->create([
            'email' => 'miladkermaji09@gmail.com',
            'mobile' => '09182718639',
            'password' => '$2y$10$83OINZ6XjLtx/kNqOeZEiuSt/5tHS5fi0uDg5WoNCA4PIcxPBsI6q',
        ]);
    }
}

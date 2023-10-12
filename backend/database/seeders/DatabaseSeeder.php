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
<<<<<<< HEAD
        $this->call(PaginasSeeder::class);
        $this->call(PersonasSeeder::class);
        $this->call(RolesSeeder::class);
=======

        $this->call(PersonaSeeder::class);
>>>>>>> 4110af0944fe3c12a2c49a61c56df05ecbc33ac6
        
    }
}

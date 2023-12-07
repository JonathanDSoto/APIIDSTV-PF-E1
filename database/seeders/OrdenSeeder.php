<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Orden;
class OrdenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Orden::factory(9)->create();
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Orden;
use App\Models\Platillo;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrdenPlatillo>
 */
class OrdenPlatilloFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'orden_id' => Orden::all()->random()->id,
            'platillo_id' => Platillo::all()->random()->id,
            'cantidad' => $this->faker->numberBetween(1, 5),
            'precio_platillo' => $this->faker->randomFloat(2, 1, 100),
        ];
    }
}

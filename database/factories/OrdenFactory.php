<?php

namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Orden>
 */
class OrdenFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'mesa' => $this->faker->unique()->numberBetween(1, 20),
            'cantidad' => $this->faker->numberBetween(1, 10),
            'tipo_orden' => $this->faker->randomElement(['domicilio', 'restaurante']),
            'direccion' => $this->faker->words(1, true),
            'total_precio' => $this->faker->numberBetween(50, 500),
            'fecha' => $this->faker->dateTimeBetween('2023-01-01', '2023-12-31')->format('Y-m-d'),
            'id_cliente' => ClienteFactory::new(),
            'id_platillo' => PlatilloFactory::new(),
        ];
    }
}

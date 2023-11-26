<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Platillo>
 */
class PlatilloFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $platilloDeSushi = [
           ['nombre' => 'Sashimi Especial', 'imagen_path' => asset('/public/gohan.png')],
            ['nombre' => 'Dragon Roll' , 'imagen_path' => asset('/public/tempu.jpg')],
            ['nombre' => 'Nigiri de Salmón', 'imagen_path' => asset('/public/zana.jpg')],
        ];
        
        $platilloAleatorio = $this->faker->randomElement($platilloDeSushi);
        
        return [
            'nombre' => $platilloAleatorio['nombre'],
            'descripcion' => $this->faker->words(3, true),
            'precio' => $this->faker->randomFloat(2, 50, 100),
            'imagen_path' => $platilloAleatorio['imagen_path'],
            'id_inventario' => InventarioFactory::new()
        ];
    }
}

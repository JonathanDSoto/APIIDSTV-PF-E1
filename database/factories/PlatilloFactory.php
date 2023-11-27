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
            ['nombre' => 'Sushi de Atún', 'imagen_path' => asset('/public/ebi.jpg')],
            ['nombre' => 'Sushi de Camarón', 'imagen_path' => asset('/public/ebi.jpg')],
            ['nombre' => 'Sushi de Pulpo', 'imagen_path' => asset('/public/ebi.jpg')],
            ['nombre' => 'Sushi de Calamar', 'imagen_path' => asset('/public/ebi.jpg')],
            ['nombre' => 'Sushi de Pescado Blanco', 'imagen_path' => asset('/public/ebi.jpg')]
        ];
        
        $platilloAleatorio = $this->faker->unique()->randomElement($platilloDeSushi);
        
        return [
            'nombre' => $platilloAleatorio['nombre'],
            'descripcion' => $this->faker->words(3, true),
            'precio' => $this->faker->randomFloat(2, 50, 100),
            'imagen_path' => $platilloAleatorio['imagen_path'],
        ];
    }
}

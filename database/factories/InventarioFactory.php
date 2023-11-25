<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inventario>
 */
class InventarioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         // Inicializar tu array de inventario aquí
         $menuInventario = [
            ['nombre' => 'Coca Cola', 'tipo' => 'Bebida', 'unidad_medida' => 'Litros'],
            ['nombre' => 'Agua', 'tipo' => 'Bebida', 'unidad_medida' => 'Litros'],
            ['nombre' => 'Arroz', 'tipo' => 'Grano', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Azúcar', 'tipo' => 'Grano', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Pimienta', 'tipo' => 'Condimento', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Salmón', 'tipo' => 'Pescado', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Atún', 'tipo' => 'Pescado', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Pescado Blanco', 'tipo' => 'Pescado', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Camarón', 'tipo' => 'Crustáceo', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Carne de Res', 'tipo' => 'Carne', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Carne de Cerdo', 'tipo' => 'Carne', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Pollo', 'tipo' => 'Carne', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Leche', 'tipo' => 'Lácteo', 'unidad_medida' => 'Litros'],
            ['nombre' => 'Queso', 'tipo' => 'Lácteo', 'unidad_medida' => 'kilogramos'],
            ['nombre' => 'Yogurt', 'tipo' => 'Lácteo', 'unidad_medida' => 'kilogramos'],
        ];

        $inventarioAleatorio = $menuInventario[array_rand($menuInventario)];

        return [
            'nombre' => $inventarioAleatorio['nombre'],
            'cantidad' => $this->faker->numberBetween(1, 50),
            'tipo' => $inventarioAleatorio['tipo'],
            'unidad_medida' => $inventarioAleatorio['unidad_medida']
        ];
    }
}
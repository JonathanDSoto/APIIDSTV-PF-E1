<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdenesVwTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ordenes_vw', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_cliente'); // #1. nombre_cliente
            $table->integer('mesa'); // #2. mesa
            $table->text('platillos'); // #3. platillos
            $table->decimal('precio_total', 10, 2); // #4. precio_total
            $table->string('tipo_orden'); // #5. tipo_orden
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ordenes_vw');
    }
}

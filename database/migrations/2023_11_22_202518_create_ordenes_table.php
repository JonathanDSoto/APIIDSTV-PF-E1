<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ordenes', function (Blueprint $table) {
            $table->bigIncrements('id')->nullable( false )->unsigned();
            $table->integer('mesa')->nullable(false);
            $table->integer('cantidad')->nullable(false);
            $table->enum('tipo_orden', ['domicilio', 'restaurante'])->nullable(false);
            $table->string('direccion')->nullable(true);
            $table->decimal('total_precio',8,2)->nullable(false);
            $table->date('fecha')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ordenes');
    }
};

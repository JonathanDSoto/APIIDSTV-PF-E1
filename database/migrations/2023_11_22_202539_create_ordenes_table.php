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
            $table->bigIncrements('id')->nullable(false)->unsigned();
            $table->integer('mesa')->nullable(true)->unique();
            $table->integer('cantidad')->nullable(false);
            $table->enum('tipo_orden', ['domicilio', 'restaurante'])->nullable(false);
            $table->string('direccion')->nullable(true);
            $table->decimal('total_precio',8,2)->nullable(true);
            $table->date('fecha')->nullable(false);
            $table->unsignedBigInteger('id_cliente');
            $table->unsignedBigInteger('id_platillo');
            $table->timestamps();

            $table->foreign('id_cliente')->references('id')->on('clientes')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('id_platillo')->references('id')->on('platillos')
                ->onDelete('cascade')
                ->onUpdate('cascade');
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

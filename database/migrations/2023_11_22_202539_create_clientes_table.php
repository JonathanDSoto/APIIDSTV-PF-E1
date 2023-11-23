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
        Schema::create('clientes', function (Blueprint $table) {
            $table->bigIncrements('id')->nullable( false )->unsigned(); 
            $table->string('nombre', 50)->nullable(false);
            $table->string('apellido', 100)->nullable(true);
            $table->string('email', 100)->nullable(false)->unique();
            $table->string('password', 255)->nullable(false);
            $table->string('telefono', 10)->nullable(true)->unique();
            $table->unsignedBigInteger('id_orden');
            $table->timestamps();

            $table->foreign('id_orden')->references('id')->on('ordenes')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clientes');
    }
};

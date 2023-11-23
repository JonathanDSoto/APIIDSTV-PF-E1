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
            $table->integer('mesa')->nullable(false)->unique();
            $table->integer('cantidad')->nullable(false);
            $table->decimal('total_precio',8,2)->nullable(false);
            $table->date('fecha')->nullable(false);
            $table->unsignedBigInteger('id_platillo');
            $table->timestamps();

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

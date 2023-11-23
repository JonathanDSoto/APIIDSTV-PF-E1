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
        Schema::create('platillos', function (Blueprint $table) {
            $table->bigIncrements('id')->nullable( false )->unsigned();
            $table->string('nombre', 50)->nullable( false )->unique();
            $table->integer('categoria')->nullable(false);
            $table->string('descripcion', 100)->nullable(false);
            $table->decimal('precio', 8, 2)->nullable(false);
            $table->unsignedBigInteger('id_inventario');
            $table->timestamps();
            
            $table->foreign('id_inventario')->references('id')->on('inventarios')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('platillos');
    }
};

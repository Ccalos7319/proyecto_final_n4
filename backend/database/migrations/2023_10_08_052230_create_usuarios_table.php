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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_persona')->constrained(table: 'personas')->onUpdate('cascade')->onDelete('cascade');
            $table->string('usuario');
            $table->string('clave');
            $table->string('habilitado');
            $table->string('fecha');
            $table->foreignId('id_rol')->constrained(table: 'rols')->onUpdate('cascade')->onDelete('cascade');
            $table->string('usuariocreacion');
            $table->string('usuariomodificacion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};

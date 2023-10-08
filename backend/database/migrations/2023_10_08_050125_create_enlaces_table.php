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
        Schema::create('enlaces', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_pagina')->constrained(table: 'paginas')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('id_rol')->constrained(table: 'rols')->onUpdate('cascade')->onDelete('cascade');
            $table->string('descripcion');
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
        Schema::dropIfExists('enlaces');
    }
};

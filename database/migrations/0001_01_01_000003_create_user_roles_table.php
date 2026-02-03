<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_roles', function (Blueprint $table) {
            $table->id('user_role_id');
            $table->string('user_role_name')->unique();
            $table->timestamps();
        });

        // Insert default roles
        DB::table('user_roles')->insert([
            [
                'user_role_name' => 'Superuser',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_role_name' => 'Administrador Empresa',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_role_name' => 'Administrador Departamento',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_role_name' => 'Empleado',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_roles');
    }
};

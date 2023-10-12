<?php

<<<<<<< HEAD
use App\Http\Controllers\BitacorasController;
use App\Http\Controllers\EnlacesController;
use App\Http\Controllers\PaginasController;
use App\Http\Controllers\PersonasController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\UsuariosController;
use App\Models\Bitacoras;
use App\Models\Enlaces;
=======
use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\PaginaController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UsuarioController;
>>>>>>> 4110af0944fe3c12a2c49a61c56df05ecbc33ac6
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
<<<<<<< HEAD

Route::controller(PersonasController::class)->group(function () {
    Route::get('/personas', 'index');
    Route::get('/personas/{id}', 'show');
    Route::post('/personas', 'create');
    Route::put('/personas/{id}', 'update');
    Route::delete('/personas/{id}', 'destroy');
});

Route::controller(RolesController::class)->group(function () {
    Route::get('/roles', 'index');
    Route::get('/roles/{id}', 'show');
    Route::post('/roles', 'create');
    Route::put('/roles/{id}', 'update');
    Route::delete('/roles/{id}', 'destroy');
});

Route::controller(PaginasController::class)->group(function () {
    Route::get('/paginas', 'index');
    Route::get('/paginas/{id}', 'show');
    Route::post('/paginas', 'create');
    Route::put('/paginas/{id}', 'update');
    Route::delete('/paginas/{id}', 'destroy');
});

Route::controller(BitacorasController::class)->group(function () {
    Route::get('/bitacoras', 'index');
    Route::get('/bitacoras/{id}', 'show');
    Route::post('/bitacoras', 'create');
    Route::put('/bitacoras/{id}', 'update');
    Route::delete('/bitacoras/{id}', 'destroy');
});

Route::controller(UsuariosController::class)->group(function () {
    Route::get('/usuarios', 'index');
    Route::get('/usuarios/{id}', 'show');
    Route::post('/usuarios', 'create');
    Route::put('/usuarios/{id}', 'update');
    Route::delete('/usuarios/{id}', 'destroy');
});

Route::controller(EnlacesController::class)->group(function () {
    Route::get('/enlaces', 'index');
    Route::get('/enlaces/{id}', 'show');
    Route::post('/enlaces', 'create');
    Route::put('/enlaces/{id}', 'update');
    Route::delete('/enlaces/{id}', 'destroy');
});
=======
Route::controller(PersonaController::class)->group(function () {
    Route::get('/persona', 'index');
    Route::get('/persona/{id}', 'show');
    Route::post('/persona', 'store');
    Route::put('/persona/{id}', 'edit');
    Route::delete('/persona/{id}', 'destroy');
});
Route::controller(UsuarioController::class)->group(function () {
    Route::get('/usuario', 'index');
    Route::get('/usuario/{id}', 'show');
    Route::post('/usuario', 'store');
    Route::put('/usuario/{id}', 'edit');
    Route::delete('/usuario/{id}', 'destroy');
});
Route::controller(RolController::class)->group(function () {
    Route::get('/rol', 'index');
    Route::get('/rol/{id}', 'show');
    Route::post('/rol', 'store');
    Route::put('/rol/{id}', 'edit');
    Route::delete('/rol/{id}', 'destroy');
});
Route::controller(PaginaController::class)->group(function () {
    Route::get('/pagina', 'index');
    Route::get('/pagina/{id}', 'show');
    Route::post('/pagina', 'store');
    Route::put('/pagina/{id}', 'edit');
    Route::delete('/pagina/{id}', 'destroy');
});
Route::controller(BitacoraController::class)->group(function () {
    Route::get('/bitacora', 'index');
    Route::get('/bitacora/{id}', 'show');
    Route::post('/bitacora', 'store');
    Route::put('/bitacora/{id}', 'edit');
    Route::delete('/bitacora/{id}', 'destroy');
});
Route::controller(EnlaceController::class)->group(function () {
    Route::get('/enlace', 'index');
    Route::get('/enlace/{id}', 'show');
    Route::post('/enlace', 'store');
    Route::put('/enlace/{id}', 'edit');
    Route::delete('/enlace/{id}', 'destroy');
    
});
Route::get('/enlaces', [EnlaceController::class, 'obtenerEnlaces']);
>>>>>>> 4110af0944fe3c12a2c49a61c56df05ecbc33ac6

<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\InventarioController;
use App\Http\Controllers\Orden;
use App\Http\Controllers\Cliente;
use App\Http\Controllers\OrdenController;
use App\Http\Controllers\PlatilloController;
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
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::apiresource('inventarios', InventarioController::class);
Route::apiResource('platillos', PlatilloController::class);
Route::apiResource('ordenes', OrdenController::class);
Route::apiResource('clientes', ClienteController::class);


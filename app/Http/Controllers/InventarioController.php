<?php

namespace App\Http\Controllers;

use App\Models\Inventario;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Responses\ApiResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\Rule;
use Exception;

class InventarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $inventarios = Inventario::all();
            return ApiResponse::success("Listado de productos en Inventario", 200, $inventarios);
        } catch(Exception $e){
            return ApiResponse::error('Error al obtener los productso de Inventario: ' .$e->getMessage(), 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required|unique:inventarios|string|max:50',
                'cantidad' => 'required|numeric|min:1',
                'tipo' => 'required|in:Bebida,Grano,Carne,Fruta,Verdura,Lacteo,Complemento,Condimiento|string|max:100',
                'unidad_medida' => 'required|in:Litros,Kilogramos|string|max:10',
            ]);
            $inventario = Inventario::create(request()->all());
            return ApiResponse::success("Producto creado exitosamente a Inventario", 201, $inventario);
        } catch (ValidationException $e) {
            return ApiResponse::error("Error al crear el producto a Inventario: ",422, $e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $inventario = Inventario::findOrFail($id);
            return ApiResponse::success("Producto en Inventario", 200, $inventario);
        } catch (Exception $e) {
            return ApiResponse::error("Error al obtener el producto de Inventario: " .$e->getMessage(), 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $inventario = Inventario::findOrFail($id);
            $request->validate([
                'nombre' => ['required|unique:inventarios|string|max:50', Rule::unique('Inventarios')->ignore($inventario)],
                'cantidad' => 'required|numeric|min:1',
                'tipo' => 'required|in:Bebida,Grano,Carne,Fruta,Verdura,Lacteo,Complemento,Condimiento',
                'unidad_medida' => 'required|in:Litros,Kilogramos',
            ]);
            $inventario->update($request->all());
            return ApiResponse::success('Producto de Inventario actualizado exitosamente', 200, $inventario);
        } catch (ModelNotFoundException $e){
            return ApiResponse::error('inventario no encontrada', 404);
        } catch (Exception $e) {
            return ApiResponse::error('Error de validación: ' . $e->getMessage(), 422);
        } 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $marca = Inventario::findOrFail($id);
            $marca->delete();
            return ApiResponse::success('Producto eliminado de inventario exitosamente', 200);
        } catch (ModelNotFoundException $e) {
            return ApiResponse::error('Producto no encontrado de inventario', 404);
        }
    }
}

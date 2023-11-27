<?php

namespace App\Http\Controllers;

use App\Models\Platillo;
use App\Http\Controllers\Controller;
use Exception;
use App\Http\Responses\ApiResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class PlatilloController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $platillos = Platillo::all();
            return ApiResponse::success("Listado de platillos", 200, $platillos);
        } catch (Exception $e) {
            return ApiResponse::error('Error al obtener los platillos: ' .$e->getMessage(), 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required|unique:platillos|string|max:50',
                'descripcion' => 'required|string|max:100',
                'precio' => 'required|numeric|min:50',
                'imagen_path' => 'string|max:255',
            ]);

            $platillo = Platillo::create($request->all());

            return ApiResponse::success("Platillo creado exitosamente", 201, $platillo);
        } catch(ValidationException $errors){
            return ApiResponse::error("Error al crear el platillo: ",422, $errors);
        }catch(ModelNotFoundException $e){
            return ApiResponse::error('Platillo no creado', 404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $platillo = Platillo::findOrFail($id);
            return ApiResponse::success("Platillo encontrado", 200, $platillo);
        } catch(ModelNotFoundException $e){
            return ApiResponse::error('Platillo no encontrado', 404);
        }
    
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $platillo = Platillo::findOrFail($id);
            $request->validate([
                'nombre' => 'required|unique:platillos,nombre|string|max:50' . $platillo->id,
                'descripcion' => 'required|string|max:100',
                'precio' => 'required|numeric|min:50',
                'imagen_path' => 'string|max:255',
            ]);            
            $platillo->update($request->all());
            return ApiResponse::success("Platillo actualizado exitosamente", 200, $platillo);
        } catch(ValidationException $errors){
            return ApiResponse::error("Error al actualizar el platillo: ",422, $errors);
        }catch(ModelNotFoundException $e){
            return ApiResponse::error('Platillo no encontrado', 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $platillo = Platillo::findOrFail($id);
            $platillo->delete();
            return ApiResponse::success("Platillo eliminado exitosamente", 200, $platillo);
        } catch (ModelNotFoundException $e) {
            return ApiResponse::error("Platillo no encontrado: ",404);
        } 
    }
}

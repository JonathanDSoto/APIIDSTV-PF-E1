<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Http\Responses\ApiResponse;


class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $clientes = Cliente::all();
            return ApiResponse::success("Listado de clientes", 200, $clientes);
        } catch (Exception $e) {
            return ApiResponse::error('Error al obtener los clientes: ' .$e->getMessage(), 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        try {
            $request->validate([
                'nombre' => 'required|string|max:50',
                'apellido' => 'string|max:50',
                'email' => 'required|unique:clientes|string|max:100',
                'password' => 'required|string|max:255',
                'telefono' => 'string|max:10',
            ]);
            $cliente = Cliente::create($request->all());
            return ApiResponse::success("Cliente creado exitosamente", 201, $cliente);
        } catch(ValidationException $errors){
            return ApiResponse::error("Error al crear el cliente: ",422, $errors);
        } catch (Exception $e) {
            return ApiResponse::error('Cliente no creado: ' .$e->getMessage(), 500);
        }
    }   

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $cliente = Cliente::findOrFail($id);
            return ApiResponse::success("Cliente encontrado", 200, $cliente);
        } catch (Exception $e) {
            return ApiResponse::error('Cliente no encontrado: ' .$e->getMessage(), 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $cliente = Cliente::findOrFail($id);
            $request->validate([
                'nombre' => 'required|string|max:50' . $cliente->id,
                'apellido' => 'string|max:50',
                'email' => 'required|string|max:100',
                'password' => 'required|string|max:255',
                'telefono' => 'string|max:10',
            ]);
            $cliente->update($request->all());
            return ApiResponse::success("Cliente actualizado exitosamente", 200, $cliente);
        } catch(ValidationException $errors){
            return ApiResponse::error("Error al actualizar el cliente: ",422, $errors);
        } catch (Exception $e) {
            return ApiResponse::error('Cliente no actualizado: ' .$e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $cliente = Cliente::findOrFail($id);
            $cliente->delete();
            return ApiResponse::success("Cliente eliminado exitosamente", 200, $cliente);
        } catch (Exception $e) {
            return ApiResponse::error('Cliente no encontrado: ' .$e->getMessage(), 500);
        }
    }
}

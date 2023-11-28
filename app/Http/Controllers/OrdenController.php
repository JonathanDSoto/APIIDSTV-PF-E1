<?php

namespace App\Http\Controllers;

use App\Models\Orden;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Responses\ApiResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Exception;
use App\Models\Platillo;


class OrdenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            //$ordenes = Orden::all();
            $ordenes = Orden::with('cliente')->with('platillo')->get();
            return ApiResponse::success("Listado de ordenes", 200, $ordenes);
        } catch(Exception $e){
            return ApiResponse::error('Error al obtener las ordenes: ' .$e->getMessage(), 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'mesa' => 'numeric|min:1',
                'cantidad' => 'required|numeric|min:1',
                'tipo_orden' => 'required|in:domicilio,restaurante|string|max:100',
                'direccion' => 'required_if:tipo_orden,domicilio|string|max:100',
                'total_precio' => 'numeric|min:50',
                'fecha' => 'required|date',
                'id_cliente' => 'required|exists:clientes,id',
                'id_platillo' => 'required|exists:platillos,id',

            ]);
            $platillo = Platillo::find($request->id_platillo);
            $total = $platillo->precio * $request->cantidad;
            $request->merge(['total_precio' => $total]);

            $orden = Orden::create(request()->all());
            return ApiResponse::success("Orden creada exitosamente", 201, $orden);
        } catch(ValidationException $errors){
            $errors = $errors->validator->errors()->toArray();
            if(isset($errors['id_cliente'])){
                $errors['cliente'] = $errors['id_cliente'];
                unset($errors['id_cliente']);
            }
            if(isset($errors['id_platillo'])){
                $errors['platillo'] = $errors['id_platillo'];
                unset($errors['id_platillo']);
            }
            return ApiResponse::error("Error al crear la orden: ",422, $errors);
        }catch(ModelNotFoundException $e){
            return ApiResponse::error('Orden no creada', 404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Orden $orden, $id)
    {
        try {
            $orden = Orden::findOrFail($id);
            return ApiResponse::success("Orden encontrada", 200, $orden);
        } catch (Exception $e) {
            return ApiResponse::error("Error al obtener la orden: " .$e->getMessage(), 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        try {
            $request->validate([
                'mesa' => 'numeric|min:1',
                'cantidad' => 'required|numeric|min:1',
                'tipo_orden' => 'required|in:domicilio,restaurante|string|max:100',
                'direccion' => 'required_if:tipo_orden,domicilio|string|max:100',
                'total_precio' => 'numeric|min:50',
                'fecha' => 'required|date',
                'id_cliente' => 'required|exists:clientes,id',
                'id_platillo' => 'required|exists:platillos,id',
            ]);
            $platillo = Platillo::find($request->id_platillo);
            $total = $platillo->precio * $request->cantidad;
            $request->merge(['total_precio' => $total]);

            $orden = Orden::findOrFail($id);
            $orden->update(request()->all());
            return ApiResponse::success("Orden actualizada exitosamente", 200, $orden);
        } catch(ValidationException $errors){
            $errors = $errors->validator->errors()->toArray();
            if(isset($errors['id_cliente'])){
                $errors['cliente'] = $errors['id_cliente'];
                unset($errors['id_cliente']);
            }
            if(isset($errors['id_platillo'])){
                $errors['platillo'] = $errors['id_platillo'];
                unset($errors['id_platillo']);
            }
            return ApiResponse::error("Error al actualizar la orden: ",422, $errors);
        }catch(ModelNotFoundException $e){
            return ApiResponse::error('Orden no actualizada', 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $orden = Orden::findOrFail($id);
            $orden->delete();
            return ApiResponse::success('Orden eliminado correctamente ', 200);
        } catch (ModelNotFoundException $e) {
            return ApiResponse::error('Orden no encontrada', 404);
        }
    }
}

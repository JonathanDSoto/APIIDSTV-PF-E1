<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrdenesVw extends Model
{
    use HasFactory;

    protected $table = 'ordenes_vw'; 

    protected $fillable = [
        'nombre_cliente',
        'mesa',
        'platillos',
        'precio_total',
        'tipo_orden',
    ];

    // logic
    public static function getOrdenesVwData()
    {
        return static::selectRaw('
            clientes.nombre AS nombre_cliente,
            ordenes.mesa,
            GROUP_CONCAT(CONCAT(platillos.nombre, "(", orden_platillos.cantidad, ")") ORDER BY platillos.nombre SEPARATOR ", ") AS platillos,
            SUM(platillos.precio * orden_platillos.cantidad) AS precio_total,
            ordenes.tipo_orden
        ')
            ->join('orden_platillos', 'ordenes.id', '=', 'orden_platillos.ordenes_id')
            ->join('platillos', 'orden_platillos.platillos_id', '=', 'platillos.id')
            ->join('clientes', 'ordenes.clientes_id', '=', 'clientes.id')
            ->groupBy('ordenes.id')
            ->get();
    }
}
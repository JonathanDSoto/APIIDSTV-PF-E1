<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Platillo extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'descripcion',
        'precio',
        'imagen_path',
        'id_inventario',
    ];

    public function inventario() //Un inventario puede tener muchos platillos asociados
    {
        return $this->belongsTo(Inventario::class, 'id_inventario');
    }
    
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orden extends Model
{
    use HasFactory;

    protected $table = 'ordenes';

    protected $fillable = [
        'mesa',
        'cantidad',
        'tipo_orden',
        'direccion',
        'total_precio',
        'fecha',     
        'id_cliente',
        'id_platillo', 
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class, 'id_cliente');
    }
    public function platillo()
    {
        return $this->belongsTo(Platillo::class, 'id_platillo');
    }    
}

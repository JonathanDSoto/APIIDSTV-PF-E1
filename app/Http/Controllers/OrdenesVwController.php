<?php

namespace App\Http\Controllers;

use App\Models\OrdenesVw;
use Illuminate\Http\Request;

class OrdenesVwController extends Controller
{
    public function index()
    {
        $ordenesVwData = OrdenesVw::getOrdenesVwData();

        return view('ordenes.index', compact('ordenesVwData'));
    }


}

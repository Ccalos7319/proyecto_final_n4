<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use Illuminate\Http\Request;

class BitacoraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bitacora = new Bitacora();
        return $bitacora->all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $bitacora = new Bitacora();

            $bitacora->bitacora = $request->bitacora;
            $bitacora->id_usuario = $request->id_usuario;
            $bitacora->fecha = $request->fecha;
            $bitacora->hora = $request->hora;
            $bitacora->ip = $request->ip;
            $bitacora->so = $request->so;
            $bitacora->navegador = $request->navegador;
            $bitacora->usuario = $request->usuario;
           
            $bitacora->save();
            return $bitacora;
        } catch (\Exception $th) {
            return json_encode($th);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Bitacora $id)
    {
        $bitacora = new Bitacora();
        return $bitacora->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bitacora $id, Request $request)
    {
        try {
            $bitacora = Bitacora::find($id);
           
            $bitacora->bitacora = $request->bitacora;
            $bitacora->id_usuario = $request->id_usuario;
            $bitacora->fecha = $request->fecha;
            $bitacora->hora = $request->hora;
            $bitacora->ip = $request->ip;
            $bitacora->so = $request->so;
            $bitacora->navegador = $request->navegador;
            $bitacora->usuario = $request->usuario;
            $bitacora->save();
            return $bitacora;
        } catch (\Exception $th) {
            return json_encode($th);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bitacora $bitacora)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bitacora $id)
    {
        $bitacora = Bitacora::find($id);
        $bitacora->delete;
        return $bitacora;
    }
}

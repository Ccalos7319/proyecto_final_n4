<?php

namespace App\Http\Controllers;

use App\Models\Pagina;
use Illuminate\Http\Request;

class PaginaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pagina = new Pagina();
        return $pagina->all();
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
            $pagina = new Pagina();
            $pagina->usuariocreacion = $request->usuariocreacion;
            $pagina->usuariomodificacion = $request->usuariomodificacion;
            $pagina->url = $request->url;
            $pagina->estado = $request->estado;
            $pagina->nombre = $request->nombre;
            $pagina->descripcion = $request->descripcion;
            $pagina->icono = $request->icono;
            $pagina->tipo = $request->tipo;
           
            $pagina->save();
            return $pagina;
        } catch (\Exception $th) {
            return json_encode($th);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Pagina $id)
    {
        $pagina = new Pagina();
      
        return $pagina->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pagina $id, Request $request)
    {
        try {
            $pagina = Pagina::find($id);
            $pagina->usuariocreacion = $request->usuariocreacion;
            $pagina->usuariomodificacion = $request->usuariomodificacion;
            $pagina->url = $request->url;
            $pagina->estado = $request->estado;
            $pagina->nombre = $request->nombre;
            $pagina->descripcion = $request->descripcion;
            $pagina->icono = $request->icono;
            $pagina->tipo = $request->tipo;
            $pagina->save();
            return $pagina;
        } catch (\Exception $th) {
            return json_encode($th);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pagina $pagina)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pagina $id)
    {
        $pagina = Pagina::find($id);
        $pagina->delete;
        return $pagina;
    }
}

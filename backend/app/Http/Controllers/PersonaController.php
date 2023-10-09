<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $persona = new Persona();
        return $persona->all();
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
            $persona = new Persona();
            $persona->primernombre = $request->primernombre;
            $persona->segundonombre = $request->segundonombre;
            $persona->primerapellido = $request->primerapellido;
            $persona->segundoapellido = $request->segundoapellido;
            $persona->usuariocreacion = $request->usuariocreacion;
            $persona->usuariomodificacion = $request->usuariomodificacion;
         
            $persona->save();
            return $persona;
        } catch (\Exception $th) {
            return json_encode($th);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Persona $id)
    {
        $persona = new Persona();
        return $persona->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Persona $id, Request $request)
    {
        try {
            $persona = Persona::find($id);
            $persona->primernombre = $request->primernombre;
            $persona->segundonombre = $request->segundonombre;
            $persona->primerapellido = $request->primerapellido;
            $persona->segundoapellido = $request->segundoapellido;
            $persona->usuariocreacion = $request->usuariocreacion;
            $persona->usuariomodificacion = $request->usuariomodificacion;
            $persona->save();
            return $persona;
        } catch (\Exception $th) {
            return json_encode($th);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Persona $persona)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Persona $id)
    {
        $persona = Persona::find($id);
        $persona->delete;
        return $persona;
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rol = new Rol();
        return $rol->all();
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
            $rol = new Rol();

            $rol->rol = $request->rol;
            $rol->usuariocreacion = $request->usuariocreacion;
            $rol->usuariomodificacion = $request->usuariomodificacion;
         
            $rol->save();
            return $rol;
        } catch (\Exception $th) {
            return json_encode($th);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Rol $id)
    {
        $rol = new Rol();
        return $rol->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rol $id, Request $request)
    {
        try {
            $rol = Rol::find($id);
            $rol->rol = $request->rol;
            $rol->usuariocreacion = $request->usuariocreacion;
            $rol->usuariomodificacion = $request->usuariomodificacion;
            $rol->save();
            return $rol;
        } catch (\Exception $th) {
            return json_encode($th);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rol $rol)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rol $id)
    {
        $rol = Rol::find($id);
        $rol->delete;
        return $rol;
    }
}

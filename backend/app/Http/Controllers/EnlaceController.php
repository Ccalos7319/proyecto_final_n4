<?php

namespace App\Http\Controllers;

use App\Models\Enlace;
use Illuminate\Http\Request;

class EnlaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    public function obtenerEnlaces(Request $request)
    {
        $enlaces = Enlace::all(); // Obtén todos los enlaces

        $respuesta = [];

        foreach ($enlaces as $enlace) {
            $paginaUrl = $enlace->pagina ? $enlace->pagina->url : null;

            $respuesta[] = [
                'id' => $enlace->id,
                'id_pagina' => [
                    'url' => $paginaUrl,
                    // Otras propiedades de la tabla "paginas" que necesites
                ],
                'id_rol' => $enlace->rol ? $enlace->rol->rol : null,
                'descripcion' => $enlace->descripcion,
                // Otras propiedades de la tabla "enlaces"
            ];
        }

        return response()->json($respuesta);
    }

    public function index()
    {
        $enlace = new Enlace();
        return $enlace->all();
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
            $enlace = new Enlace();

            $enlace->id_pagina = $request->id_pagina;
            $enlace->id_rol = $request->id_rol;
            $enlace->descripcion = $request->descripcion;
            $enlace->usuariocreacion = $request->usuariocreacion;
            $enlace->usuariomodificacion = $request->usuariomodificacion;


            $enlace->save();
            return $enlace;
        } catch (\Exception $th) {
            return json_encode($th);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Enlace $id)
    {
        $enlace = new Enlace();


        return $enlace->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Enlace $id, Request $request)
    {
        try {
            $enlace = Enlace::find($id);
            $enlace->id_pagina = $request->id_pagina;
            $enlace->id_rol = $request->id_rol;
            $enlace->descripcion = $request->descripcion;
            $enlace->usuariocreacion = $request->usuariocreacion;
            $enlace->usuariomodificacion = $request->usuariomodificacion;
            $enlace->save();
            return $enlace;
        } catch (\Exception $th) {
            return json_encode($th);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Enlace $enlace)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Enlace $id)
    {
        $enlace = Enlace::find($id);
        $enlace->delete;
        return $enlace;
    }
}

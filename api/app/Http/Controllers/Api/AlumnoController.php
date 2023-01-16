<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Alumno;
use Illuminate\Http\Request;

class AlumnoController extends Controller
{

    public function index()
    {
        $alumnos = Alumno::all();
        return $alumnos;
    }


    public function store(Request $request)
    {
        $alumno = new Alumno();
        $alumno->matricula = $request->matricula;
        $alumno->nombre = $request->nombre;
        $alumno->apellidopaterno = $request->apellidopaterno;
        $alumno->apellidomaterno = $request->apellidomaterno;
        $alumno->edad = $request->edad;
        $alumno->carrera = $request->carrera;
        $alumno->cuatrimestre = $request->cuatrimestre;
        $alumno->calificacion = $request->calificacion;

        $alumno->save();
    }


    public function show($id)
    {
        $alumno = Alumno::find($id);
        return $alumno;
    }


    public function update(Request $request, $id)
    {
        $alumno = Alumno::findOrFail($request->$id);
        $alumno->matricula = $request->matricula;
        $alumno->nombre = $request->nombre;
        $alumno->apellidopaterno = $request->apellidopaterno;
        $alumno->apellidomaterno = $request->apellidomaterno;
        $alumno->edad = $request->edad;
        $alumno->carrera = $request->carrera;
        $alumno->cuatrimestre = $request->cuatrimestre;
        $alumno->calificacion = $request->calificacion;

        $alumno->save();
        return $alumno;
    }


    public function destroy($id)
    {
        $alumno = Alumno::destroy($id);
        return $alumno;
    }
}

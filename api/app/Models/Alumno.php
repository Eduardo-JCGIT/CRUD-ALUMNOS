<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    use HasFactory;
    protected $fillable = ['matricula', 'nombre', 'apellidopaterno', 'apellidomaterno', 'edad', 'carrera', 'cuatrimestre', 'calificacion'];
}

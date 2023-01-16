<?php
use App\Http\Controllers\Api\AlumnoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AlumnoController::class)->group(function(){
    Route::get('/alumnos', 'index');
    Route::post('/alumno', 'store');
    Route::get('/alumno/{id}', 'show');
    Route::put('/alumno/{id}', 'update');
    Route::delete('/alumno/{id}', 'destroy');
});
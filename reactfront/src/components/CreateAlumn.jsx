import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

const endponit = 'http://localhost:8000/api/alumno'


const CreateAlumn = () => {

    const [matricula,  setMatricula] = useState('')
    const [nombre,  setNombre] = useState('')
    const [apellidopaterno,  setApellidopaterno] = useState('')
    const [apellidomaterno,  setApellidomaterno] = useState('')
    const [edad,  setEdad] = useState(0)
    const [carrera,  setCarrera] = useState('')
    const [cuatrimestre,  setCuatrimestre] = useState('')
    const [calificacion,  setCalificacion] = useState(0)

    const navigate = useNavigate()


    const store = async (e) =>{
        e.preventDefault()
        await axios.post(endponit, {matricula: matricula, nombre: nombre, apellidomaterno: apellidomaterno, apellidopaterno: apellidopaterno, edad: edad, carrera: carrera, cuatrimestre: cuatrimestre, calificacion: calificacion})
        navigate('/')
        alert("Se añadio el esudiante en el registro :D")
    }

  return (

    <div>

        <div>
        <div className="jumbotron jumbotron-fluid color-header">
    <div className="container">
    <h1 className="display-4">Añadir alumno nuevo</h1>
    <p className="lead">ingresa los datos del nuevo alumno</p>
        </div>
        </div>
        </div>

    <div className='container'>

       <form onSubmit={store}>

        <div className="row">
        <div className='col-6'>
            <label className='form-label'>Matrícula</label>
            <input value={matricula}
            onChange={ (e)=> setMatricula(e.target.value)}
            type="text"
            className='form-control'
            />
        </div>

        <div className='col-6'>
            <label className='form-label'>Nombre</label>
            <input value={nombre}
            onChange={ (e)=> setNombre(e.target.value)}
            type="text"
            className='form-control'
            />
        </div>
        


        <div className='col-6'>
            <label className='form-label'>Apellido Materno</label>
            <input value={apellidopaterno}
            onChange={ (e)=> setApellidopaterno(e.target.value)}
            type="text"
            className='form-control'
            />
        </div>

        <div className='col-6'>
            <label className='form-label'>Apellido Paterno</label>
            <input value={apellidomaterno}
            onChange={ (e)=> setApellidomaterno(e.target.value)}
            type="text"
            className='form-control'
            />
        </div>

        

        <div className='col-2'>
            <label className='form-label'>Edad</label>
            <input value={edad}
            onChange={ (e)=> setEdad(e.target.value)}
            type="number"
            className='form-control'
            />
        </div>

        <div className='col-5'>
            <label className='form-label'>Carrera</label>
            
            <select class="form-select" aria-label="Default select example" value={carrera}
            onChange={ (e)=> setCarrera(e.target.value)}>
            <option selected>Selecciona la carrera</option>
            <option value="Licenciatura Sistemas Computacionales Administrativos">Licenciatura Sistemas Computacionales Administrativos</option>
            <option value="Licenciatura en Ciencias de la Comunicación">Licenciatura en Ciencias de la Comunicación</option>
            <option value="Licenciatura en Administración de Empresas">Licenciatura en Administración de Empresas</option>
            <option value="Licenciatura en Derecho">Licenciatura en Derecho</option>
            <option value="Licenciatura en Ingeniería en Programación y Web Master">Licenciatura en Ingeniería en Programación y Web Master</option>
            <option value="Licenciatura en Contaduría">Licenciatura en Contaduría</option>
            <option value="Licenciatura en Pedagogía">Licenciatura en Pedagogía</option>
            <option value="Licenciatura en Artes Culinarias y Negocios Gastronómicos">Licenciatura en Artes Culinarias y Negocios Gastronómicos</option>
            </select>
        </div>

        <div className='col-4'>
            <label className='form-label'>Cuatrimestre</label>
            <select class="form-select" aria-label="Default select example" value={cuatrimestre}
            onChange={ (e)=> setCuatrimestre(e.target.value)}>
            <option selected>Selecciona el cuatrimestre</option>
            <option value="Primer Cuatrimestre<">Primer Cuatrimestre</option>
            <option value="Segundo Cuatrimestre">Segundo Cuatrimestre</option>
            <option value="Tercer Cuatrimestre">Tercer Cuatrimestre</option>
            <option value="Cuarto Cuatrimestre">Cuarto Cuatrimestre</option>
            <option value="Quinto Cuatrimestre">Quinto Cuatrimestre</option>
            <option value="Sexto Cuatrimestre">Sexto Cuatrimestre</option>
            <option value="Séptimo Cuatrimestre">Séptimo Cuatrimestre</option>
            <option value="Octavo Cuatrimestre">Octavo Cuatrimestre</option>
            <option value="Noveno Cuatrimestre">Noveno Cuatrimestre</option>
            </select>
        </div>

        <div className='col-1'>
            <label className='form-label'>Calificación</label>
            <input value={calificacion}
            onChange={ (e)=> setCalificacion(e.target.value)}
            type="number"
            className='form-control'
            />
        </div>
        </div>
        <div  className='sep-button'>
        <Link to="/" className='btn btn-primary'>Regresar</Link>
        <button type='submit' className='btn btn-success'>Añadir</button>
        </div>
       </form>
    </div>

    </div>
  )
}

export default CreateAlumn

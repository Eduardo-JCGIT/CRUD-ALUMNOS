import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const endponit = 'http://localhost:8000/api'

const ShowAlumn = () => {
    const [alumnos, setAlumnos] = useState ([])

    useEffect ( ()=>{
        getAllAlumnos()
    }, [])



    const getAllAlumnos = async () =>{
        const response = await axios.get(`${endponit}/alumnos`)
        setAlumnos(response.data)
        console.log(response)
    }

    const deleteAlumn = async (id) =>{
        await axios.delete(`${endponit}/alumno/${id}`)
        getAllAlumnos()
        alert('Se elimino el alumno correctamente :D')
    }

  return (
    <div>
        <div>
        <div className="jumbotron jumbotron-fluid color-header">
    <div className="container">
    <h1 className="display-4">Alumnos</h1>
    <p className="lead">Información de alumnos inscritos en la insitución</p>
        </div>
        </div>
        </div>
    <div className='container'>
    <table className='table table-striped'>
        <thead className='color-table text-white'>
            <tr>
                <th>Matricula</th>
                <th>Nombre</th>
                <th>Apellido Materno</th>
                <th>Apelllido Paterno</th>
                <th>Edad</th>
                <th>Carrera</th>
                <th>Cuatrimestre</th>
                <th>Califiacion</th>
                <th>Acciones</th>
            </tr>
        </thead>

        <tbody>
            {alumnos.map((alumno) => (
                <tr key={alumno.id}>
                    <td>{alumno.matricula}</td>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.apellidopaterno}</td>
                    <td>{alumno.apellidomaterno}</td>
                    <td>{alumno.edad}</td>
                    <td>{alumno.carrera}</td>
                    <td>{alumno.cuatrimestre}</td>
                    <td>{alumno.calificacion}</td>

                    <td>
                        <Link to={`/edit/${alumno.id}`} className='btn btn-warning'>Editar</Link>
                        <button onClick={ ()=>deleteAlumn(alumno.id) } className='btn btn-danger'>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

    <div className='posicion-btn'>
      <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
    </div>
    </div>
    </div>
  )
}

export default ShowAlumn

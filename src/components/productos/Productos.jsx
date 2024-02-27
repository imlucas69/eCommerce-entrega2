import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Productos = () => {
const {user_id} = useParams();

    const [data, setData] =useState({})


    useEffect( () => {

      fetch('https://65dcaec5e7edadead7ecb20a.mockapi.io/details/' + user_id)
        .then(response => response.json())
        .then(res_json => {
            setData(res_json);
          })
    }, [])

    console.log(data)
    
  return (
    <>
    
      <h1>Detalles del Producto</h1>
        <ul>
            <li>ID: { data.id }</li>
            <li>Nombre: {data.name}</li>
            <li>Detalle: { data.detail }</li>
            <li>Vehiculo: { data.vehicle }</li>
        </ul>

        <Link to="/productos">Volver</Link>

    </>
  )
}

export default Productos

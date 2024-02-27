import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductosListados() {

    const [productos, setProductos] = useState([])

    useEffect( () => {
        fetch('https://65dcaec5e7edadead7ecb20a.mockapi.io/details/')
        .then(response => response.json())
        .then(res_json => setProductos(res_json))
    }, [])

        console.log(productos)


  return (
    <>

        <ul>
            {
                productos.map( productos => <li>{productos.name} ({productos.id})  <Link to={`/productos/${productos.id}`}>Ver más</Link></li>)
            }
        </ul>

        

    </>
  )
}

export default ProductosListados
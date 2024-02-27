import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
          <div className='navbar'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <NavLink to="/vehiculos">Vehiculos</NavLink>
            <NavLink to="/celulares">Celulares</NavLink>
          </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar
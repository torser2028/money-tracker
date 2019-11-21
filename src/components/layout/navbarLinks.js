import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>Iniciar Sesión</NavLink></li>
        <li><NavLink to='/'>Registrarse</NavLink></li>
        <li><NavLink to='/'>Categorías</NavLink></li>
        <li><NavLink to='/'>Cuentas</NavLink></li>
        <li><NavLink to='/'>Gastos</NavLink></li>
        <li><NavLink to='/'>Ingresos</NavLink></li>
        <li><NavLink to='/'>Salir</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
      </ul>
    </div>
  )
}

export default NavbarLinks
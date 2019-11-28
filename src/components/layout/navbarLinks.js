import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/sign-in'>Iniciar Sesión</NavLink></li>
        <li><NavLink to='/sign-up'>Registrarse</NavLink></li>
        <li><NavLink to='/categories'>Categorías</NavLink></li>
        <li><NavLink to='/accounts'>Cuentas</NavLink></li>
        <li><NavLink to='/expenses'>Gastos</NavLink></li>
        <li><NavLink to='/incomes'>Ingresos</NavLink></li>
        <li><NavLink to='/sign-out'>Salir</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating green lighten-1">NN</NavLink></li>
      </ul>
    </div>
  )
}

export default NavbarLinks
import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLinks from './navbarLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Money Tracker</Link>
        <NavbarLinks />
      </div>
    </nav>
  )
}

export default Navbar
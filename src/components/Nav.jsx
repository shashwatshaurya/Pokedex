import React from 'react';
import logo from '../static/logo.png';
import './Nav.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="Pokedex" />
        </div>
    );
}

export default Navbar;

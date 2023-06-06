import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Navbar.scss'

const NavBar = () => {
    return (
        <nav>
            <Link className='navLink' to="/">Accueil</Link>
            <Link className='navLink' to="/About">A Propos</Link>            
        </nav>
    );
};

export default NavBar;
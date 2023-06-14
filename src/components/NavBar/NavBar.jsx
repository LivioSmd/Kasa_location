import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink activeclassname="active" to="/">Accueil</NavLink></li>
                <li><NavLink activeclassname="active" to="/About">A Propos</NavLink></li>
            </ul>       
        </nav>
    );
};

export default NavBar;

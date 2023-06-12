import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/Navbar.scss'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact activeClassName="active" to="/">Accueil</NavLink></li>
                <li><NavLink activeClassName="active" to="/About">A Propos</NavLink></li>
            </ul>       
        </nav>
    );
};

export default NavBar;

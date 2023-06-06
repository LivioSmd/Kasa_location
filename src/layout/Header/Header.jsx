import React from 'react';
import logoDesktop from './images/logoDesktop.png'
import NavBar from '../../components/Navbar/Navbar';

const Header = () => {
    return (

        <div>
            <img src={logoDesktop} alt="" />
            <NavBar/>
        </div>
    );
};

export default Header;
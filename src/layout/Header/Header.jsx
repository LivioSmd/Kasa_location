import React from 'react';
import logoDesktop from './images/logoDesktop.png'
import NavBar from '../../components/NavBar/NavBar';

const Header = () => {
    return (
        <div>
            <img src={logoDesktop} alt="logo Kasa" />
            <NavBar/>
        </div>
    );
};

export default Header;
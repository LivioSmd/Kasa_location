import React from 'react';
import logoDesktop from './images/logoDesktop.png'
import NavBar from '../../components/NavBar/NavBar';
import '../../Styles/Header.scss'

const Header = () => {
    return (
        <div className='headerNav'>
            <img src={logoDesktop} alt="logo Kasa" />
            <NavBar/>
        </div>
    );
};

export default Header;
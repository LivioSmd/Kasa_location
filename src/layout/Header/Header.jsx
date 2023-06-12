import React from 'react';
import Logo from '../../datas/images/Logo/Logo.png'
import NavBar from '../../components/NavBar/NavBar';
import './Header.scss'

const Header = () => {
    return (
        <div className='headerNav'>
            <img src={Logo} alt="logo Kasa" />
            <NavBar/>
        </div>
    );
};

export default Header;
import React from 'react';
import LogoWhite from '../../datas/images/Logo/LogoWhite.png'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footerDiv'>
            <img src={LogoWhite} className='logoFooter' alt="Logo Kasa" />
            <h3 className='text-footer'>© 2020 Kasa. All rights reserved</h3>
        </div>
    );
};

export default Footer;
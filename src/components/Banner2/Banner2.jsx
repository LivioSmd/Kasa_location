import React from 'react';
import Paysage2 from './Paysage2.png'
import '../../Styles/Banner1.scss'

const Banner2 = () => {
    return (
        <div className='div-img-banner1'>
            <img src={Paysage2} className='imgPaysageBanner1' alt="bannière de paysage de montagne" />
        </div>
    );
};

export default Banner2;
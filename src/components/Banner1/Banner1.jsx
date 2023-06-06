import React from 'react';
import Paysage1 from './Paysage1.png'
import '../../Styles/Banner1.scss'
import '../../Styles/App.scss'

const Banner1 = () => {
    return (
        <div className='div-img-banner1'>
          <h1>Chez vous, partout et ailleurs</h1>
          <img src={Paysage1} className='imgPaysageBanner1' alt="bannière de paysage de falaise" />  
        </div>
    );
};

export default Banner1;
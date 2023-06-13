import React from 'react';
import './Banner.scss'
import '../../Styles/App.scss'

function Banner1 ({paysage, name}) {
    return (
        <div className='div-img-banner1'>
          <h1>{name}</h1>
          <img src={paysage} className='imgPaysageBanner1' alt="bannière de paysage de falaise" />  
        </div>
    );
};

export default Banner1;
import React from 'react';
import logements from '../../datas/logements.json'
import '../../Styles/Card.scss'
import '../../Styles/App.scss'

const Card = () => {
    return (
        <div className='card-logement'>
            {
                logements && logements.map( logements => {
                    return (
                        <div className='card' key={logements.id}>
                            <h4>{logements.title}</h4>
                            <img className='img-card' src={logements.cover} alt="logement disponible" />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Card;
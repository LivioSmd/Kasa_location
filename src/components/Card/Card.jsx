import React from 'react';
import logements from '../../datas/logements.json'
import '../../Styles/Card.scss'

const Card = () => {
    return (
        <div>
            {
                logements && logements.map( logements => {
                    return (
                        <div className='card-logement' key={logements.id}>
                            {logements.title},
                            <img className='img-card' src={logements.cover} alt="logement disponible" />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Card;
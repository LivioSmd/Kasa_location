import React from 'react';
import logements from '../../datas/logements.json'

const Card = () => {
    return (
        <div>
            {
                logements && logements.map( logements => {
                    return (
                        <div>
                            {logements.title},
                            <img src={logements.cover} alt="une image de logement disponible" />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Card;
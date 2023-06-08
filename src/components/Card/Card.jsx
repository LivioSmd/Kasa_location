import React from 'react';
import logements from '../../datas/Logements/logements.json'
import '../../Styles/Card.scss'
import '../../Styles/App.scss'
import { useNavigate } from "react-router-dom";


const Card = () => {

    const navigate = useNavigate();

    return (
        <div className='card-logement'>
            {
                logements && logements.map( logements => {
                    return (
                        <div onClick={ () => navigate("accomodation/" + logements.id)} className='card' key={logements.id}>
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
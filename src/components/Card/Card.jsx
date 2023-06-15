import React from 'react';
import logements from '../../datas/Logements/logements.json'
import './Card.css'
import '../../Styles/App.css'
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
                            <div className='img-container'>
                                <div className='img-overlay'></div>
                                <img className='img-card' src={logements.cover} alt="logement disponible" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Card;
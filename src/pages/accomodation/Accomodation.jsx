import "../../Styles/Accomodation.scss";
import logements from "../../datas/Logements/logements.json";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import  "react-responsive-carousel/lib/styles/carousel.min.css" ;
import {  Carousel  }  from  'react-responsive-carousel' ;

function Affiche({ logement }) {

  return <>
        <div className="container-carousel">
            <Carousel className="Carousel" infiniteLoop>
            {logement.pictures.map((img, index) => {
                return <img src={img} className="img-carousel" key={index} alt="slider du logement disponible" />
            })}
            </Carousel>
        </div>
        <div>
            <img src={logement.pictures} alt="" />
            <h4>{logement.title}</h4>
            <h4>{logement.host.name}</h4>
            <img src={logement.host.picture} alt="" />
            <h4>{logement.location}</h4>
            <p>{logement.tags}</p>
            <p>{logement.rating}</p>
            <h2>{logement.description}</h2>
            <p>{logement.equipments}</p>
        </div>
    </>
}

function Accomodation() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const logementFound = logements.find((logement) => logement.id === id);
        setLogement(logementFound);
    }, [id]);

    return (
        <div>
            {logement ? <Affiche logement={logement} /> : <p>Logement introuvable</p>}
        </div>
  );
}

export default Accomodation;

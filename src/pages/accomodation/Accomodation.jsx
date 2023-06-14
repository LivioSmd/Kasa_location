import "./Accomodation.scss";
import logements from "../../datas/Logements/logements.json";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import StarsRate from "../../components/StarsRate/StarsRate";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import CollapseForEquipements from "../../components/Collapse/CollapseForEquipements";

function Affiche({ logement }) {
  return <>
        <div className="container-carousel">
            <Carousel pictures={logement.pictures}/>
        </div>
        <div className="infos-container">
            <div className="titl-name-img">
                <h2>{logement.title}</h2>
                <div className="name-img profile-desktop"> 
                    <h4>{logement.host.name}</h4>
                    <img src={logement.host.picture} alt={logement.host.name}/>
                </div>
            </div>
            <h4 className="log-location">{logement.location}</h4>
            <div className="tags-rating"> 
                <div className="tags">
                    {logement.tags.map((tags, index) => {
                        return <h5 key={index}>{tags}</h5>
                    })}
                </div>
                <div className="stars-profile">
                    <StarsRate rate={logement.rating} />
                    <div className="name-img profile-phone"> 
                        <h4>{logement.host.name}</h4>
                        <img src={logement.host.picture} alt={logement.host.name}/>
                    </div>
                </div>
            </div>
            <div className="collapse-desc-equip">
                <Collapse name='Description'>{logement.description}</Collapse>
                <CollapseForEquipements name='Équipements'>{logement.equipments}</CollapseForEquipements >
            </div>
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

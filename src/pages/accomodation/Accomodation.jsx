import "../../Styles/Accomodation.scss";
import logements from "../../datas/Logements/logements.json";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import StarsRate from "../../components/StarsRate/StarsRate";
import CollapseDesc from "../../components/CollapseDesc/CollapseDesc";
import CollapseEquipements from "../../components/CollapseEquipements/CollapseEquipements";
import Carousel from "../../components/Carousel/Carousel"

function Affiche({ logement }) {
  return <>
        <div className="container-carousel">
            <Carousel pictures={logement.pictures}/>
        </div>
        <div className="infos-container">
            <div className="titl-name-img">
                <h2>{logement.title}</h2>
                <div className="name-img"> 
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
                    <StarsRate rate={logement.rating} />
                </div>
            <div className="collapse-desc-equip">
                <CollapseDesc title='Description' desc={logement.description} />
                <CollapseEquipements equip={logement.equipments} />
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

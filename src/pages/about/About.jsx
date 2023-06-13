import React from "react";
import "./About.scss";
import Banner2 from "../../components/Banner2/Banner2";
import Collapse from "../../components/Collapse/Collapse";

const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
const RespectService = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const Securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


function About() {
    return (
        <div className="div-banner-collapse">
            <div className="div-banner">
                <Banner2 /> 
            </div>
            <div className="all-collapseAbout">
                <Collapse name='Fiabilité'>{fiabilite}</Collapse>
                <Collapse name='Respect'>{RespectService}</Collapse>
                <Collapse name='Service'>{RespectService}</Collapse>
                <Collapse name='Securité'>{Securite}</Collapse>
            </div>
        </div>
    )
}

export default About; 

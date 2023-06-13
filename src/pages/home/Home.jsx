import React from "react";
import "./Home.scss";
import Banner1 from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Paysage1 from '../../datas/images/Paysage/Paysage1.png'


function Home() {
    return (
        <div className="home-page">
            <Banner1 name="Chez vous, partout et ailleurs" paysage={Paysage1}/>
            <Card/>
        </div>
    )
}

export default Home; 

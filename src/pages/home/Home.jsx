import React from "react";
import "./Home.scss";
import Banner1 from "../../components/Banner1/Banner1";
import Card from "../../components/Card/Card";


function Home() {
    return (
        <div className="home-page">
            <Banner1 />
            <Card/>
        </div>
    )
}

export default Home; 

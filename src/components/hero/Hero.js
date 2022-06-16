import React from "react";

import hero from "../../images/hero.png";
import "./Hero.css";

function Hero(){
    return(
        <div className="container-hero">
            <img className="hero-img" src={hero}/>
        </div>
    )
}

export default Hero;
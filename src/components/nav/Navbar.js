import React from "react";
import logo from "../../images/airbnb.png";
import "./Navbar.css";

function Navbar(){
    return(
        <div className="container-nav">
            <img className="nav-logo" src={logo}/>
        </div>
    )
}

export default Navbar;
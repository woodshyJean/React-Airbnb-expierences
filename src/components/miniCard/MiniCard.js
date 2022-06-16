import React from "react";
import swimmer from "../../images/swimmer.png";
import star from "../../images/Star.png";
import ellipse from "../../images/Ellipse.png";
import soldout from "../../images/soldOut.png";
import "./MiniCard.css";

function MiniCard(){
    return(
        <div className="container-minicard">
            <div className="container-image">
                <img className="main-button" src={soldout}/>
                <img className="main-img" src={swimmer}/>
            </div>
            <div className="container-info">
                <div className="rating">
                    <img className="star" src={star}/>
                    <p className="num">5.0</p>
                    <p className="parenthesis">(25)</p>
                    <img className="ellipse" src={ellipse}/>
                    <p className="usa">USA</p>
                </div>
                <div className="text1">
                    <p>Life lessons with Katie Zaferes</p>
                </div>
                <div className="text2">
                    <p> <span className="text2-bold">From $136 /</span> person</p>
                </div>
            </div>
        </div>
    )
}

export default MiniCard;
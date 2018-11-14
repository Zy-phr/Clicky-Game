import React from "react";
import "./Cards.css";

const Cards = props => (
  <div className="card">
    <div className="img-container">
    <a onClick={() => props.selectPoke(props.name)} 
                className={props.runningScore === 0  ? "style-click" : "style-click" }
            >
                <img alt={props.name} src={props.image} />
            </a>
    </div>
  </div>
);


export default Cards;

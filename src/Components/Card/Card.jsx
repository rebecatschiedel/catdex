import React from "react";
import "./card.css";


export const Card = (props) => (
<div className="card-container"> 
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=200x200`} />
    <div className="flex-container">
        <h2 key = { props.monster.id }>{ props.monster.name }</h2>
        <p>{props.monster.email}</p>
    </div>
</div>
);


import React from "react";
import "./style.css";

function GameCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.checkClicked(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default GameCard;
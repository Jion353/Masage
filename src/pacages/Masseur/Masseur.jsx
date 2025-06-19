import React from "react";
import "./Masseur.scss";

export default function Masseur({id, photo, name, description, reverse }) {
  return (
    <div className={`masseur_card${reverse ? " masseur_card--reverse" : ""}`}>
      <img src={photo} alt={name} className="masseur_card-photo" />
      <div className="masseur_card-info">
        <h3 className="masseur_card-name">{name}</h3>
        <p className="masseur_card-description">{description}</p>
      </div>
    </div>
  );
}
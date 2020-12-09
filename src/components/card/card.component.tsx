import React from "react";
import "./card.styles.css";
import { Monster } from "../../types";

const Card = ({ id, name, email }: Monster) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

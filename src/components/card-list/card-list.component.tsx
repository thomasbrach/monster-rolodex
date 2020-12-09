import React from "react";
import Card from "../card/card.component";
import "./card-list.style.css";
import { Monster } from "../../types";

interface IProps {
  monsters: Monster[];
}

const CardList = ({ monsters }: IProps) => {
  return (
    <div className="card-list">
      {monsters.map(({ id, name, email }: Monster) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default CardList;

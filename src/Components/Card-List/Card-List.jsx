import React from "react";
import "./Card-List.css";
import Card from "../Card/Card";
const CardList = (props) => {
  return (
    <div className="cardList">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;

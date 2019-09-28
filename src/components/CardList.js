import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => {
  return (
    <div>
      {characters.map((char, i) => {
        return <Card key={i} character={char} />;
      })}
    </div>
  );
};

export default CardList;

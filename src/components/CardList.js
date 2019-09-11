import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => {
  return (
    <div>
      {characters.map((char, i) => {
        return (
          <Card
            key={i}
            id={characters[i].id}
            name={characters[i].name}
            spec={characters[i].spec}
          />
        );
      })}
    </div>
  );
};

export default CardList;

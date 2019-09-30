import React, { Component } from "react";
import Card from "./Card";

import { characters } from "../config/Characters";

class CardList extends Component {
  render() {
    const { onCardClick } = this.props;
    return (
      <div>
        {characters.map((char, i) => {
          return <Card key={i} character={char} onClick={onCardClick} />;
        })}
      </div>
    );
  }
}

export default CardList;

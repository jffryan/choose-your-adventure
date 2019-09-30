import React from "react";
import { Link } from "react-router-dom";

const Card = ({ character, onClick }) => {
  const { name, spec, id, url } = character;
  return (
    <Link
      className="card-link"
      onClick={() => onClick(character)}
      to={`/character-select/${url}`}
    >
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt={name}></img>
        <div>
          <h2>{name}</h2>
          <p style={{ fontSize: "18px" }}>{spec}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

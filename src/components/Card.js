import React from "react";

const Card = ({ name, spec, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="character 1"></img>
      <div>
        <h2>{name}</h2>
        <p style={{ fontSize: "18px" }}>{spec}</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const Card = ({ character }) => {
  const { name, spec, id, stats } = character;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?200x200`}
        alt={name}
        title={name}
      ></img>
      <div>
        <h2>{name}</h2>
        <p style={{ fontSize: "18px" }}>{spec}</p>
        <div>
          {stats &&
            Object.keys(stats).map(statName => {
              const statConfig = stats[statName];
              const { val, desc } = statConfig;
              return <p key={statName} title={desc}>{`${statName}: ${val}`}</p>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;

/* <p>
  {stats &&
    Object.keys(stats).map(statName => {
      const statConfig = stats[statName];
      const { val, desc } = statConfig;
      return <p title={desc}>{`${statName}: ${val}`}</p>;
    })}
</p> */

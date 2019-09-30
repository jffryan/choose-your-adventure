import React from "react";

const Statbox = character => {
  const { stats } = character;
  return (
    <div>
      {stats &&
        Object.keys(stats).map(statName => {
          const statConfig = stats[statName];
          const { val, desc } = statConfig;
          return <p key={statName} title={desc}>{`${statName}: ${val}`}</p>;
        })}
    </div>
  );
};

export default Statbox;

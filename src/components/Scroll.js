import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        border: "1px solid #333",
        Height: "900px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello World!</h1>
      <Link to="/character-select">Choose your character</Link>
    </div>
  );
};

export default Home;

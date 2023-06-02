import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({ planeteers, setPlaneteers }) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();

    fetch("http://localhost:8003/planeteers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(randomPlaneteer),
    });
    setPlaneteers([...planeteers, randomPlaneteer]);
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Add a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;

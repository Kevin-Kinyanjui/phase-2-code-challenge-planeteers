import React, { useState } from "react";

function Planeteer({ planeteer }) {
  const [showingBio, setShowingBio] = useState(true);

  function toogleBio() {
    setShowingBio((prevBioState) => !prevBioState);
  }

  const currentYear = new Date().getFullYear();

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          onClick={toogleBio}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">
            {showingBio ? planeteer.bio : planeteer.quote}
          </p>
          <div className="card__detail">
            <p className="card__text">{planeteer.twitter}</p>
            <p className="card__text">Age {currentYear - planeteer.born}</p>
            <p className="card__text">
              {planeteer.fromUSA ? "USA-based" : "Working overseas"}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;

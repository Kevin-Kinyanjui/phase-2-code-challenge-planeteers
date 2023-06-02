import React, { useState, useEffect } from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ searchTerm }) {
  const [planeteers, setPlaneteers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setPlaneteers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const searchedPlaneteers = planeteers.filter(
    (planeteer) =>
      planeteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      planeteer.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="cards">
      {searchedPlaneteers.map((planeteer) => (
        <Planeteer key={planeteer.id} planeteer={planeteer} />
      ))}
    </ul>
  );
}

export default PlaneteersContainer;

import React from "react";
import { useParams } from "react-router-dom";
import medewerkers from "../data/medewerkersData";

export default function MedewerkerDetail() {
  const { id } = useParams();
  const medewerker = medewerkers.find((m) => m.id === id);

  if (!medewerker) {
    return (
      <div className="not-found">
        <h2>Medewerker niet gevonden 😅</h2>
        <p>Controleer de URL of ga terug naar de medewerkerspagina.</p>
      </div>
    );
  }

  return (
    <div className="medewerker-detail-page">
      <section className="detail-hero">
        <div className="hero-overlay">
          <h1>Onze Medewerkers</h1>
          <p>{medewerker.intro}</p>
        </div>
      </section>

      <section className="detail-photo">
        <img src={medewerker.img} alt={medewerker.name} />
        <h3>{medewerker.name}</h3>
      </section>
    </div>
  );
}

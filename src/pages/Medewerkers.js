import React from "react";
import { Link } from "react-router-dom";
import medewerkers from "../data/medewerkersData";

export default function Medewerkers() {
  return (
    <div className="taarten-page">
      {/* Hero Section */}
      <section
        className="taarten-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600')",
        }}
      >
        <div className="hero-overlay">
          <h1>De Speciaalzaak – Dagbesteding met een glimlach ☕</h1>
          <p>
            Bij De Speciaalzaak geloven we dat iedereen iets bijzonders te
            bieden heeft. In onze gezellige lunchroom in Voorburg bieden we een
            warme plek waar mensen met een verstandelijke beperking kunnen
            werken, leren en groeien — midden in de maatschappij.
          </p>
          <p>
            Onze dagbesteding is kleinschalig, persoonlijk en gericht op ieders
            talent. We kijken naar wat iemand wél kan en bouwen van daaruit
            verder. Nieuwsgierig? Kom gerust langs voor een kennismaking of
            meeloopdag!
          </p>
        </div>
      </section>

      {/* Tegel Grid (zelfde maat als taarten) */}
      <section className="taarten-grid">
        {medewerkers.map((m) => (
          <Link
            key={m.id}
            to={`/medewerkers/${m.id}`}
            className="taart-tile"
            style={{ textDecoration: "none" }}
          >
            <div className="taart-image-wrapper">
              <img src={m.img} alt={m.name} />
            </div>
            <div className="taart-info">
              <h3>{m.name}</h3>
              <p>Klik om meer over {m.name} te lezen →</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

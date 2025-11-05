import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="app-container">
      <header className="hero-section"></header>

      {/* Section 1 - Three G's */}
      <section className="three-gs-section">
        <div className="three-gs-content">
          <h3>Welkom bij De Speciaalzaak 🌿</h3>
          <h2>Bij ons draait alles om gezelligheid, smaak en samen zijn</h2>

          <div className="g-item">
            <p>
              We zijn een familie met een droom: een plek creëren waar iedereen zich thuis voelt. Waar koffie met
              aandacht wordt geschonken, taarten met liefde worden gebakken en heerlijke lunches met een glimlach
              worden geserveerd.
            </p>
          </div>

          <div className="g-item">
            <p>
              In onze lunchroom werken we samen met een bijzonder team — mensen met een verstandelijke beperking, elk
              met hun eigen talent, humor en hart. Samen maken we van elke dag iets moois.
            </p>
          </div>

          <div className="g-item">
            <p>
              Bij De Speciaalzaak geloven we dat iedereen iets te brengen heeft. We kijken niet naar wat iemand niet
              kan, maar juist naar wat iemand wél kan. En dat voel je — in de sfeer, in de lach en in alles wat we doen.
            </p>
          </div>

          <div className="g-item">
            <p>
              Kom gezellig langs voor een kop koffie, een stuk huisgemaakte taart of een lekkere lunch. Laat je verrassen
              door de smaak, de warmte en de mensen achter De Speciaalzaak. De Speciaalzaak – gewoon een fijne plek om te
              zijn.
            </p>
          </div>
        </div>

        <div className="three-gs-image">
          <img
            src="https://images.unsplash.com/photo-1762092259684-60f2b81f6ccd?auto=format&fit=crop&q=80&w=735"
            alt="Speciaalzaak medewerkers"
          />
        </div>
      </section>

      {/* Section 2 - Cards */}
      <section className="cards-section">
        <Link to="/taarten" className="card">
          <img
            src="https://images.unsplash.com/photo-1762280957898-51cbdf451a85?auto=format&fit=crop&q=80&w=1042"
            alt="Onze Taarten"
          />
          <div className="card-content">
            <h3>ONZE TAARTEN</h3>
            <p>Bij De Speciaalzaak worden onze taarten met liefde gemaakt — vers uit onze eigen keuken.</p>
          </div>
        </Link>

        <Link to="/menu" className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UEy1gvVCIaUDPFMxgY2Zbd-bF-JeGWRqZA&s"
            alt="Onze Keuken"
          />
          <div className="card-content">
            <h3>ONZE KEUKEN</h3>
            <p>Bijna alles wat we serveren maken we zelf —met seizoensproducten en ingrediënten van dichtbij.</p>
          </div>
        </Link>

        <Link to="/medewerkers" className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7cyHrJfm5lAfyCn0jCflZflaCfAVdOHb7g&s"
            alt="Onze Medewerkers"
          />
          <div className="card-content">
            <h3>ONZE MEDEWERKERS</h3>
            <p>Bij De Speciaalzaak draait alles om mensen. Ontdek ons bijzondere team!</p>
          </div>
        </Link>
      </section>
    </div>
  );
}

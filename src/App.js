import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>De Speciaalzaak Style Dummy Page</h1>
      </header>

       {/* Section 1 - Three G's */}
      <section className="three-gs-section">
        <div className="three-gs-content">
          <h2>DE DRIE G'S VAN</h2>
          <h3>BROWNIES&DOWNIES</h3>
          
          <div className="g-item">
            <h4>GASTVRIJHEID</h4>
            <p>
              Wij kunnen geen dag zonder mensen om ons heen. Elk bezoek aan ons betekent ook een bezoekje aan onze medewerkers betekent liefdevlle bediening.
            </p>
          </div>
          
          <div className="g-item">
            <h4>GENIETEN</h4>
            <p>
              Het goed eten en drinken en de zon aangename sfeer zorgen voor een onvergetelijke lunch, borrel en taart ervaring met elkaar.
            </p>
          </div>
          
          <div className="g-item">
            <h4>GROEIEND</h4>
            <p>
              Elke dag een beetje beter worden. Het beste uit elkaar halen, oplossingen zelf bij de klanten. Dat maakt Brownies & Downies uniek!
            </p>
          </div>
        </div>
        
        <div className="three-gs-image">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
            alt="Brownies&Downies medewerkers"
          />
        </div>
      </section>
      {/* Cards Section */}
      <section className="cards-section">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
            alt="Gezellige sfeer"
          />
          <div className="card-content">
            <h3>GEZELLIGE SFEER</h3>
            <p>
              Een warme en uitnodigende plek waar iedereen zich thuis voelt. Onze gezellige inrichting en vriendelijke medewerkers zorgen voor een unieke ervaring.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
            alt="Heerlijke gerechten"
          />
          <div className="card-content">
            <h3>HEERLIJKE GERECHTEN</h3>
            <p>
              Geniet van verse, smaakvolle gerechten met een glimlach. We gebruiken alleen hoogwaardige ingrediënten voor een heerlijke lunch of koffie.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=800&q=80"
            alt="Samenwerken"
          />
          <div className="card-content">
            <h3>SAMENWERKEN</h3>
            <p>
              Bij De Speciaalzaak werkt een bijzonder team samen met passie. Iedereen draagt bij op zijn of haar eigen unieke manier en dat maakt het speciaal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

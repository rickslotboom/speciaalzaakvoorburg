import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero-section">
      </header>

       {/* Section 1 - Three G's */}
      <section className="three-gs-section">
        <div className="three-gs-content">
          <h2>WIE ZIJN WIJ?</h2>
          <h3>
            De Speciaalzaak is een hecht familie-initiatief waarin ieders talent samenkomt.
          </h3>
          
          <div className="g-item">
            <p>
              Merel en Khushbu hadden al lange tijd de wens om samen een eigen onderneming te
              starten. Ria wilde graag een warme en betekenisvolle plek creëren voor mensen met een
              verstandelijke beperking. Zo ontstond Dagbesteding De Speciaalzaak.
            </p>
          </div>
          
          <div className="g-item">
            <p>
              Frank begeleidt al jarenlang mensen met een beperking en zet zijn kennis en betrokkenheid
              voort binnen De Speciaalzaak. Rick is verantwoordelijk voor de ICT en zorgt dat alles achter
              de schermen soepel verloopt.
            </p>
          </div>

        <div className="g-item">
            <p>
              De eerste deelnemer in de dagbesteding is Niek. Niek heeft een bijzonder talent om mensen
              te raken en te verwonderen. Binnen De Speciaalzaak krijgt hij de ruimte om zijn kwaliteiten
              verder te ontwikkelen.

              Bij De Speciaalzaak wordt gekeken naar wat iemand wél kan, in plaats van naar wat iemand
              niet kan.
            </p>
          </div>
     </div>


        
        
        <div className="three-gs-image">
          <img
            src="https://images.unsplash.com/photo-1762092259684-60f2b81f6ccd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
            alt="Speciaalzaak medewerkers"
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

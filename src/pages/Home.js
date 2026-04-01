import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="app-container">
      <header className="hero-section"></header>

      {/* Section 1 - Paasbrunch */}
      <section className="three-gs-section">
        <div className="three-gs-content">
          <h3>🐣 Paasbrunch bij De Speciaalzaak</h3>
          <h2>Maandag 6 april (Tweede Paasdag) vanaf 11:00 uur</h2>

          <div className="g-item">
        
  <p>De paasbrunch is volgeboekt! 
</p>


 

  <p>
<b>
Alle plekken zijn inmiddels gereserveerd.</b></p>


            
          </div>

        
        </div>

        {/* Paas foto */}
        <div className="three-gs-image">
          <img
            src="/images/pasen.jpg"
            alt="Paasbrunch bij De Speciaalzaak"
            className="single-feature-image"
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
            src="https://images.unsplash.com/photo-1762614482251-c5781670753a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            alt="Onze Keuken"
          />
          <div className="card-content">
            <h3>ONZE KEUKEN</h3>
            <p>Bijna alles wat we serveren maken we zelf —met seizoensproducten en ingrediënten van dichtbij.</p>
          </div>
        </Link>

        <Link to="/medewerkers" className="card">
          <img
            src="https://images.unsplash.com/photo-1762614279942-6e0a5e68dba6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            alt="Onze Medewerkers"
          />
          <div className="card-content">
            <h3>ONZE MEDEWERKERS</h3>
            <p>Bij De Speciaalzaak draait alles om mensen. Ontdek ons bijzondere team!</p>
          </div>
        </Link>

        <Link to="/evenementen" className="card">
          <img
            src="https://images.unsplash.com/photo-1762613405932-808f609fee2a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="Onze Evenementen"
          />
          <div className="card-content">
            <h3>ONZE EVENEMENTEN</h3>
            <p>Vier jouw moment bij ons! Van babyshowers tot borrels — onze lunchroom is te huur voor jouw speciale gelegenheid.</p>
          </div>
        </Link>

      <Link to="/reserveren" className="card">
          <img
            src="https://images.unsplash.com/photo-1635548166842-bf67bacbefaa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Reserveren"
          />
          <div className="card-content">
            <h3>RERSERVEREN</h3>
            <p>Reserveer een tafeltje en geniet van koffie, taart of lunch in onze warme en gezellige lunchroom.</p>
          </div>
        </Link>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h3>Bezoek Ons</h3>
          <div className="contact-details">
            <p>Herenstraat 16</p>
            <p>2271 CG Voorburg</p>
            <p>Telefoonnummer Lunchroom: 0703116961</p>
            <p>Telefoonnummer Zorg: 06 81698345</p>
          </div>
          <div className="openingstijden">
            <h4>Openingstijden</h4>
            <p>Dinsdag t/m Zaterdag: 09:00 - 17:00</p>
            <p>Zondag & Maandag: Gesloten</p>
          </div>
        </div>
      </section>
    </div>
  );
}

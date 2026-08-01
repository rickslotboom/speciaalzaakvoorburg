import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeMoederdag() {
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = document.getElementById("pannenkoek-video");
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  

  return (
    <div className="app-container">
      <header
        className="hero-section"
        style={{
          backgroundImage: "url('/images/speciaalzaak.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#f0eeeb",
        }}
      />

{/* Section - Vakantie / Gesloten */}
<section
  className="three-gs-section"
  style={{
    display: "block",
    margin: "0 auto",
  }}
>
  <img
    src="/images/gesloten.jpg"
    alt="Wij zijn op vakantie"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
    }}
  />
</section>

      {/* Section - High Tea */}
      <section className="three-gs-section">
        <div className="three-gs-content">
          <h3>High Tea bij De Speciaalzaak</h3>
          <div className="g-item">
            <p>
              Laat u verrassen door een heerlijke High Tea met een uitgebreide
              selectie huisgemaakte zoete en hartige lekkernijen.
            </p>
            <p>
              Geniet van onbeperkt thee, heerlijke smaken en vooral van een
              gezellige middag samen.
            </p>
            <p>
              <Link to="/nazomer-hightea" className="reserve-link">
                Klik hier om te reserveren
              </Link>
            </p>
            <p className="tagline">Proef. Ontspan. Geniet.</p>
          </div>
        </div>
        <div className="three-gs-image">
          <img
            src="/images/high-tea.jpg"
            alt="High Tea"
            className="single-feature-image"
          />
        </div>
      </section>

      {/* Section - Turkse Avond */}
      <section className="three-gs-section">
        <div className="three-gs-image">
          <img
            src="/images/turks.jpg"
            alt="Turkse Avond"
            className="single-feature-image"
          />
        </div>
        <div className="three-gs-content">
          <div className="g-item">
            <p>Onze themadiners zijn inmiddels erg geliefd.</p>
            <p>
              Geen professionele chefs, maar mensen die met liefde hun
              traditionele familierecepten voor u bereiden. Authentieke
              smaken, rechtstreeks uit hun eigen keuken.
            </p>
            <p>Dat maakt onze themadiners zo bijzonder en uniek.</p>
            <p>
              Tijdens de Turkse avond kookt de familie van Muhamed voor u en
              neemt zij u mee op een culinaire reis door de Turkse keuken.
            </p>
            <p>
              <Link to="/turkse-avond" className="reserve-link">
                Klik hier om te reserveren
              </Link>
            </p>
          </div>
        </div>
      </section>


      {/* Section - Pannenkoekmiddag */}
      <section className="three-gs-section">
        <div className="three-gs-content" style={{ position: "relative" }}>
          <video
            id="pannenkoek-video"
            src="/videos/pannenkoekmiddag.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", borderRadius: "8px", display: "block" }}
          />
          <button
            onClick={toggleSound}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              background: "rgba(0,0,0,0.55)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title={muted ? "Geluid aan" : "Geluid uit"}
          >
            {muted ? "🔇" : "🔊"}
          </button>
        </div>
        <div className="three-gs-image">
          <img
            src="/images/pannenkoekmiddag.jpeg"
            alt="pannenkoekmiddag"
            className="single-feature-image"
          />
        </div>
      </section>

      {/* Section - Cards */}
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
            src="/images/menu.jpg"
            alt="Onze Keuken"
          />
          <div className="card-content">
            <h3>ONZE KEUKEN</h3>
            <p>Bijna alles wat we serveren maken we zelf — met seizoensproducten en ingrediënten van dichtbij.</p>
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
            <h3>RESERVEREN</h3>
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
            <p>Telefoonnummer Lunchroom: 0703316169</p>
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
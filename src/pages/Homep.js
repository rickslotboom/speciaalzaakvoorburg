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

      {/* Section - Ethiopische Avond */}
      <section className="three-gs-section">
        <div className="three-gs-image">
          <img
            src="/images/ethiopisch.jpg"
            alt="Ethiopische Avond"
            className="single-feature-image"
          />
        </div>
        <div className="three-gs-content">
          <div className="g-item">
            <p>
              Op 8 november maken we er bij De Speciaalzaak weer een
              bijzondere avond van.
            </p>
            <p>
              Samen met Restaurant Simba te Rotterdam laten we u
              kennismaken met de heerlijke smaken van Ethiopië. Denk aan
              geurige kruiden, kleurrijke gerechten en vooral: samen aan
              tafel genieten.
            </p>
            <p>
              De Ethiopische keuken draait om delen, gastvrijheid en
              gezelligheid. Precies dat willen we deze avond ook laten
              voelen.
            </p>
            <p>
              Laat u verrassen, proef iets nieuws en geniet samen met ons
              van een warme en sfeervolle avond, zoals u van ons gewend
              bent bij De Speciaalzaak.
            </p>
            <p style={{ textDecoration: "underline", fontWeight: "bold", color: "red" }}>
              Uitverkocht!
            </p>
          </div>
        </div>
      </section>

      {/* Section - Twaalfuurtje (alleen afbeelding) */}
      <section className="three-gs-section">
        <div className="three-gs-image single-image-section">
          <img
            src="/images/twaalfuurtje.jpg"
            alt="Twaalfuurtje"
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
            
             <p style={{ textDecoration: "underline", fontWeight: "bold", color: "red" }}>
              Uitverkocht!
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
            <p>Dinsdag t/m Zaterdag: 09:00 - 16:00</p>
            <p>Zondag & Maandag: Gesloten</p>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Reserveren() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    datum: "",
    tijd: "",
    personen: "",
    opmerking: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_c7dkrs8",
        "template_c8g3ftt",
        {
          naam: formData.naam,
          email: formData.email,
          datum: formData.datum,
          tijd: formData.tijd,
          personen: formData.personen,
          opmerking: formData.opmerking,
        },
        "CoLqh9mfvCXmBDyuJ"
      )
      .then(() => {
        alert(
          "Bedankt! Je reservering is ontvangen en wordt definitief na bevestiging per e-mail."
        );
        setFormData({
          naam: "",
          email: "",
          datum: "",
          tijd: "",
          personen: "",
          opmerking: "",
        });
      })
      .catch((error) => {
        console.error("Email fout:", error);
        alert("Er ging iets mis bij het versturen. Probeer het later opnieuw.");
      });
  };

  return (
    <div className="reserveren-page">
      {/* Hero */}
      <section className="reserveren-hero">
        <div className="reserveren-overlay">
          <h1>Reserveren</h1>
          <p>
            Kom gezellig langs bij De Speciaalzaak! Reserveer eenvoudig een
            tafeltje en wij zorgen voor koffie, taart en een warm welkom.
          </p>
        </div>
      </section>

      {/* Formulier */}
      <section className="reserveren-section">
        <div className="reserveren-card">
          <h2>Maak een reservering</h2>
          <p className="reserveren-intro">
            Vul het formulier hieronder in. We bevestigen je reservering zo snel
            mogelijk.
          </p>

          <form className="reserveren-form" onSubmit={handleSubmit}>
            {/* Naam + Email */}
            <div className="form-row">
              <div className="form-group">
                <label>Naam</label>
                <input
                  type="text"
                  name="naam"
                  placeholder="Je naam"
                  value={formData.naam}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>E-mailadres</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Je e-mailadres"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Datum + Tijd */}
            <div className="form-row">
              <div className="form-group">
                <label>Datum</label>
                <input
                  type="date"
                  name="datum"
                  value={formData.datum}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Tijd</label>
                <input
                  type="time"
                  name="tijd"
                  value={formData.tijd}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Personen */}
            <div className="form-group">
              <label>Aantal personen</label>
              <input
                type="number"
                name="personen"
                min="1"
                placeholder="Bijv. 4"
                value={formData.personen}
                onChange={handleChange}
                required
              />
            </div>

            {/* Opmerking */}
            <div className="form-group full-width">
              <label>Opmerking</label>
              <textarea
                name="opmerking"
                placeholder="Bijvoorbeeld dieetwensen, kinderwagen, speciale gelegenheid..."
                value={formData.opmerking}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button type="submit" className="reserveren-button">
              Verstuur reservering
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

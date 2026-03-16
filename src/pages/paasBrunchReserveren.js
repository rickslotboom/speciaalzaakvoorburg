import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function PaasbrunchReserveren() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
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
        "template_wlhmutr",
        {
          naam: formData.naam,
          email: formData.email,
          datum: "6 april - Tweede Paasdag",
          tijd: formData.tijd,
          personen: formData.personen,
          opmerking: formData.opmerking,
          evenement: "Paasbrunch",
        },
        "CoLqh9mfvCXmBDyuJ"
      )
      .then(() => {
        alert(
          "Bedankt! Je reservering voor de Paasbrunch is ontvangen. We bevestigen deze zo snel mogelijk per e-mail. "
        );

        setFormData({
          naam: "",
          email: "",
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
          <h1>🐣 Paasbrunch</h1>
          <p>
            Vier Tweede Paasdag bij De Speciaalzaak! Op maandag 6 april serveren
            wij een gezellige paasbrunch vanaf 11:00 uur.
          </p>
        </div>
      </section>

      {/* Formulier */}
      <section className="reserveren-section">
        <div className="reserveren-card">
          <h2>Reserveer voor de Paasbrunch</h2>

          <p className="reserveren-intro">
            De paasbrunch vindt plaats op <strong>maandag 6 april</strong>.
            Reserveer hieronder je tafel. Na je reserveringsaanvraag ontvang je van ons een e-mail met de betaalinformatie voor de aanbetaling.
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

            {/* Tijd */}
            <div className="form-group">
              <label>Tijd (vanaf 11:00)</label>
              <input
                type="time"
                name="tijd"
                min="11:00"
                value={formData.tijd}
                onChange={handleChange}
                required
              />
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
                placeholder="Bijvoorbeeld dieetwensen, kinderwagen..."
                value={formData.opmerking}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button type="submit" className="reserveren-button">
              Reserveer Paasbrunch
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
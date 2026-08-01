import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function WijnReserveren() {
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
        "template_c8g3ftt",
        {
          naam: formData.naam,
          email: formData.email,
          datum: "6 september - Nazomer High Tea",
          tijd: "14:00",
          personen: formData.personen,
          opmerking: formData.opmerking,
          evenement: "Nazomer High Tea",
        },
        "CoLqh9mfvCXmBDyuJ"
      )
      .then(() => {
        alert(
          "Bedankt! Je reservering voor de Nazomer High Tea is ontvangen. We bevestigen deze zo snel mogelijk per e-mail. "
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
          <h1>Nazomer High Tea</h1>
          <p>
            Kom gezellig naar de nazomer High Tea bij De Speciaalzaak, op zondag 6 september.
          </p>
        </div>
      </section>

      {/* Formulier */}
      <section className="reserveren-section">
        <div className="reserveren-card">
          <h2>Reserveer voor de Nazomer High Tea</h2>

          <p className="reserveren-intro">
            De High Tea vindt plaats op <strong>zondag 6 september</strong>.
            Reserveer hieronder. Na je reserveringsaanvraag ontvang je van ons een e-mail met de betaalinformatie voor de aanbetaling.
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
              Reserveer voor de Nazomer High Tea
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ModeReserveren() {
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
          datum: "13 november - Modeshow",
          personen: formData.personen,
          opmerking: formData.opmerking,
          evenement: "Modeshow",
        },
        "CoLqh9mfvCXmBDyuJ"
      )
      .then(() => {
        alert(
          "Bedankt! Je reservering voor de Modeshow is ontvangen. We bevestigen deze zo snel mogelijk per e-mail."
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
          <h1>Modeshow</h1>
          <p>
            Op 13 november organiseren wij een modeshow bij De
            Speciaalzaak Voorburg. Schrijf je snel in en tot dan!
          </p>
        </div>
      </section>

      {/* Formulier */}
      <section className="reserveren-section">
        <div className="reserveren-card">
          <h2>Reserveer voor de Modeshow</h2>

          <p className="reserveren-intro">
            Op 13 november organiseren wij een modeshow bij De
            Speciaalzaak Voorburg. Schrijf je snel in en tot dan!
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
                placeholder="Bijv. 2"
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
                placeholder="Laat het ons hier weten als er bijzonderheden zijn waar we rekening mee moeten houden"
                value={formData.opmerking}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button type="submit" className="reserveren-button">
              Reserveer voor de Modeshow
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
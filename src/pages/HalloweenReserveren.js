import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  doc,
  getDoc,
  setDoc,
  increment,
  onSnapshot,
} from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
import { db, auth } from "../firebase";

const MAX_PER_SLOT = 6;
const DATUM = "2026-10-31";

const TIJDSLOTEN = [];
for (let h = 9; h < 16; h++) {
  TIJDSLOTEN.push(`${String(h).padStart(2, "0")}:00`);
  TIJDSLOTEN.push(`${String(h).padStart(2, "0")}:30`);
}

function slotDocId(tijd) {
  return `${DATUM}_${tijd.replace(":", "-")}`;
}

export default function HalloweenReserveren() {
  const [bezetting, setBezetting] = useState({});
  const [gekozenSlot, setGekozenSlot] = useState(null);
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    personen: "",
    opmerking: "",
  });
  const [bezig, setBezig] = useState(false);

  useEffect(() => {
    signInAnonymously(auth).catch(() => {});

    const unsubscribes = TIJDSLOTEN.map((tijd) => {
      const ref = doc(db, "reserveringen-slots", slotDocId(tijd));
      return onSnapshot(ref, (snap) => {
        const count = snap.exists() ? snap.data().count : 0;
        setBezetting((prev) => ({ ...prev, [tijd]: count }));
      });
    });

    return () => unsubscribes.forEach((u) => u());
  }, []);

  const handleSlotKlik = (tijd) => {
    const bezet = bezetting[tijd] || 0;
    if (bezet >= MAX_PER_SLOT) return;
    setGekozenSlot(tijd);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gekozenSlot) return;

    setBezig(true);

    try {
      const ref = doc(db, "reserveringen-slots", slotDocId(gekozenSlot));
      const snap = await getDoc(ref);
      const huidigCount = snap.exists() ? snap.data().count : 0;

      if (huidigCount >= MAX_PER_SLOT) {
        alert("Dit tijdslot is net volgeraakt. Kies een ander tijdslot.");
        setGekozenSlot(null);
        setBezig(false);
        return;
      }

      await setDoc(ref, { count: increment(1) }, { merge: true });

      await emailjs.send(
        "service_c7dkrs8",
        "template_c8g3ftt",
        {
          naam: formData.naam,
          email: formData.email,
          datum: "31 oktober 2026",
          tijd: gekozenSlot,
          personen: formData.personen,
          opmerking: formData.opmerking,
        },
        "CoLqh9mfvCXmBDyuJ"
      );

      alert(
        "Bedankt! Je reservering is ontvangen en wordt definitief na bevestiging per e-mail."
      );

      setGekozenSlot(null);
      setFormData({ naam: "", email: "", personen: "", opmerking: "" });
    } catch (err) {
      console.error("Fout bij reserveren:", err);
      alert("Er ging iets mis. Probeer het later opnieuw.");
    }

    setBezig(false);
  };

  const vrijePlekken = (tijd) =>
    Math.max(0, MAX_PER_SLOT - (bezetting[tijd] || 0));

  return (
    <div className="reserveren-page">
      <section className="reserveren-hero">
        <div className="reserveren-overlay">
          <h1>Reserveren</h1>
          <p>
            Kom gezellig langs bij De Speciaalzaak! Reserveer eenvoudig een
            tafeltje en wij zorgen voor koffie, taart en een warm welkom.
          </p>
        </div>
      </section>

      <section className="reserveren-section">
        <div className="reserveren-card">
          <h2>🎃 Halloween — vrijdag 31 oktober</h2>
          <p className="reserveren-intro">Kies een tijdslot en reserveer je plekje.</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
              gap: "10px",
              marginTop: "0.75rem",
            }}
          >
            {TIJDSLOTEN.map((tijd) => {
              const vrij = vrijePlekken(tijd);
              const vol = vrij === 0;
              const gekozen = gekozenSlot === tijd;

              return (
                <button
                  key={tijd}
                  onClick={() => handleSlotKlik(tijd)}
                  disabled={vol}
                  style={{
                    padding: "12px 8px",
                    borderRadius: 8,
                    border: gekozen ? "2px solid #8b5e3c" : "1px solid #ddd",
                    background: vol ? "#f5f5f5" : gekozen ? "#fdf3eb" : "#fff",
                    color: vol ? "#bbb" : "#333",
                    cursor: vol ? "not-allowed" : "pointer",
                    textAlign: "center",
                    fontWeight: gekozen ? 700 : 400,
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{tijd}</div>
                  <div style={{ fontSize: 12, marginTop: 4, color: vol ? "#bbb" : "#888" }}>
                    {vol ? "Vol" : `${vrij} plek${vrij === 1 ? "" : "ken"} vrij`}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {gekozenSlot && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setGekozenSlot(null);
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "28px 24px",
              width: "100%",
              maxWidth: 480,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Reservering bevestigen</h2>
            <p style={{ color: "#666", marginBottom: 20 }}>
              🎃 Vrijdag 31 oktober om {gekozenSlot}
            </p>

            <form className="reserveren-form" onSubmit={handleSubmit}>
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

              <div className="form-group full-width">
                <label>Opmerking</label>
                <textarea
                  name="opmerking"
                  placeholder="Bijvoorbeeld dieetwensen, kinderwagen, speciale gelegenheid..."
                  value={formData.opmerking}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                <button
                  type="button"
                  onClick={() => setGekozenSlot(null)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: 8,
                    border: "1px solid #ddd",
                    background: "#f5f5f5",
                    cursor: "pointer",
                    fontSize: 15,
                  }}
                >
                  Annuleren
                </button>
                <button
                  type="submit"
                  className="reserveren-button"
                  disabled={bezig}
                  style={{ flex: 2 }}
                >
                  {bezig ? "Bezig…" : "Verstuur reservering"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
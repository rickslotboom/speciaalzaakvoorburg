import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { doc, runTransaction, onSnapshot } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
import { db, auth } from "../firebase";

// Elke persoon neemt 1 plek in. Een tijdslot heeft MAX_PER_SLOT plekken.
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
  const [personen, setPersonen] = useState(1);
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
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

  const vrijePlekken = (tijd) =>
    Math.max(0, MAX_PER_SLOT - (bezetting[tijd] || 0));

  // Past het gekozen aantal personen nog in dit slot?
  const pastInSlot = (tijd) => vrijePlekken(tijd) >= personen;

  const handlePersonenChange = (e) => {
    const waarde = parseInt(e.target.value, 10);
    if (Number.isNaN(waarde)) {
      setPersonen("");
      return;
    }
    setPersonen(Math.min(Math.max(1, waarde), MAX_PER_SLOT));
  };

  const handleSlotKlik = (tijd) => {
    if (!personen || !pastInSlot(tijd)) return;
    setGekozenSlot(tijd);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gekozenSlot || !personen) return;

    setBezig(true);

    try {
      const ref = doc(db, "reserveringen-slots", slotDocId(gekozenSlot));

      // Transactie: check + ophogen gebeurt atomair, zodat twee gasten
      // tegelijk het slot niet over de limiet kunnen heen duwen.
      await runTransaction(db, async (tx) => {
        const snap = await tx.get(ref);
        const huidigCount = snap.exists() ? snap.data().count : 0;

        if (huidigCount + personen > MAX_PER_SLOT) {
          throw new Error("SLOT_VOL");
        }

        tx.set(ref, { count: huidigCount + personen }, { merge: true });
      });

      await emailjs.send(
        "service_c7dkrs8",
        "template_c8g3ftt",
        {
          naam: formData.naam,
          email: formData.email,
          datum: "31 oktober 2026",
          tijd: gekozenSlot,
          personen: personen,
          opmerking: formData.opmerking,
        },
        "CoLqh9mfvCXmBDyuJ"
      );

      alert(
        "Bedankt! Je reservering is ontvangen en wordt definitief na bevestiging per e-mail."
      );

      setGekozenSlot(null);
      setPersonen(1);
      setFormData({ naam: "", email: "", opmerking: "" });
    } catch (err) {
      if (err.message === "SLOT_VOL") {
        alert(
          "Er zijn in dit tijdslot niet genoeg plekken meer voor jullie groep. Kies een ander tijdslot."
        );
        setGekozenSlot(null);
      } else {
        console.error("Fout bij reserveren:", err);
        alert("Er ging iets mis. Probeer het later opnieuw.");
      }
    }

    setBezig(false);
  };

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
          <h2>🎃 Halloween — zaterdag 31 oktober</h2>
          <p className="reserveren-intro">
            Kies eerst met hoeveel personen jullie komen en daarna een
            tijdslot. Elke persoon neemt één plek in het tijdslot in. Er zijn
            per tijdslot {MAX_PER_SLOT} plekken. Met een grotere groep? Mail ons dan op ria@speciaalzaakvoorburg.nl
          </p>

          <div className="form-group" style={{ maxWidth: 200, marginBottom: 16 }}>
            <label>Aantal personen</label>
            <input
              type="number"
              min="1"
              max={MAX_PER_SLOT}
              value={personen}
              onChange={handlePersonenChange}
            />
          </div>

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
              const past = !!personen && vrij >= personen;
              const uit = !past;
              const gekozen = gekozenSlot === tijd;

              let label;
              if (vol) label = "Vol";
              else if (!past) label = `Nog ${vrij} vrij`;
              else label = `${vrij} plek${vrij === 1 ? "" : "ken"} vrij`;

              return (
                <button
                  key={tijd}
                  type="button"
                  onClick={() => handleSlotKlik(tijd)}
                  disabled={uit}
                  style={{
                    padding: "12px 8px",
                    borderRadius: 8,
                    border: gekozen ? "2px solid #8b5e3c" : "1px solid #ddd",
                    background: uit ? "#f5f5f5" : gekozen ? "#fdf3eb" : "#fff",
                    color: uit ? "#bbb" : "#333",
                    cursor: uit ? "not-allowed" : "pointer",
                    textAlign: "center",
                    fontWeight: gekozen ? 700 : 400,
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{tijd}</div>
                  <div style={{ fontSize: 12, marginTop: 4, color: uit ? "#bbb" : "#888" }}>
                    {label}
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
              🎃 Zaterdag 31 oktober om {gekozenSlot} — {personen}{" "}
              {personen === 1 ? "persoon" : "personen"}
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
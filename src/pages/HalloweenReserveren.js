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

const MAX_PER_SLOT = 5;

// Tijdsloten van 9:00 tot 16:00, elke 30 minuten
const TIJDSLOTEN: string[] = [];
for (let h = 9; h < 16; h++) {
  TIJDSLOTEN.push(`${String(h).padStart(2, "0")}:00`);
  TIJDSLOTEN.push(`${String(h).padStart(2, "0")}:30`);
}

function isClosedDay(dateString: string): boolean {
  const day = new Date(dateString).getDay();
  return day === 0 || day === 1;
}

function slotDocId(datum: string, tijd: string): string {
  return `${datum}_${tijd.replace(":", "-")}`;
}

interface SlotBezetting {
  [tijd: string]: number;
}

interface FormData {
  naam: string;
  email: string;
  personen: string;
  opmerking: string;
}

export default function HalloweenReserveren() {
  const [datum, setDatum] = useState("");
  const [dateError, setDateError] = useState("");
  const [bezetting, setBezetting] = useState<SlotBezetting>({});
  const [gekozenSlot, setGekozenSlot] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    naam: "",
    email: "",
    personen: "",
    opmerking: "",
  });
  const [bezig, setBezig] = useState(false);

  useEffect(() => {
    signInAnonymously(auth).catch(() => {});
  }, []);

  useEffect(() => {
    if (!datum || isClosedDay(datum)) {
      setBezetting({});
      return;
    }

    const unsubscribes = TIJDSLOTEN.map((tijd) => {
      const ref = doc(db, "reserveringen-slots", slotDocId(datum, tijd));
      return onSnapshot(ref, (snap) => {
        const count = snap.exists() ? (snap.data().count as number) : 0;
        setBezetting((prev) => ({ ...prev, [tijd]: count }));
      });
    });

    return () => unsubscribes.forEach((u) => u());
  }, [datum]);

  const handleDatumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDatum(val);
    setGekozenSlot(null);
    if (isClosedDay(val)) {
      setDateError("Wij zijn gesloten op zondag en maandag.");
    } else {
      setDateError("");
    }
  };

  const handleSlotKlik = (tijd: string) => {
    const bezet = bezetting[tijd] || 0;
    if (bezet >= MAX_PER_SLOT) return;
    setGekozenSlot(tijd);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gekozenSlot || !datum) return;

    setBezig(true);

    try {
      const ref = doc(db, "reserveringen-slots", slotDocId(datum, gekozenSlot));
      const snap = await getDoc(ref);
      const huidigCount = snap.exists() ? (snap.data().count as number) : 0;

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
          datum,
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

  const vrijePlekken = (tijd: string) =>
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
          <h2>Kies een datum</h2>
          <div className="form-group" style={{ maxWidth: 260 }}>
            <label>Datum</label>
            <input
              type="date"
              value={datum}
              onChange={handleDatumChange}
              min={new Date().toISOString().split("T")[0]}
            />
            {dateError && (
              <p style={{ color: "#d9534f", marginTop: "0.25rem", fontSize: "0.9rem" }}>
                {dateError}
              </p>
            )}
          </div>

          {datum && !dateError && (
            <>
              <h3 style={{ marginTop: "1.5rem" }}>Kies een tijdslot</h3>
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
            </>
          )}
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
              📅 {new Date(datum).toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" })} om {gekozenSlot}
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
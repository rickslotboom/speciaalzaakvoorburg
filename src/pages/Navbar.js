import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Onze Keuken" },
  { to: "/taarten", label: "Onze Taarten" },
  { to: "/medewerkers", label: "Onze Medewerkers" },
  { to: "/evenementen", label: "Evenementen" },
  { to: "/reserveren", label: "Reserveren" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger knop */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Menu openen"
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          zIndex: 1000,
          background: "rgba(255,255,255,0.92)",
          border: "none",
          borderRadius: "8px",
          padding: "0.5rem 0.65rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <span style={{ display: "block", width: "22px", height: "2px", background: "#5c4033", borderRadius: "2px" }} />
        <span style={{ display: "block", width: "22px", height: "2px", background: "#5c4033", borderRadius: "2px" }} />
        <span style={{ display: "block", width: "22px", height: "2px", background: "#5c4033", borderRadius: "2px" }} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 1001,
          }}
        />
      )}

      {/* Sidebar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "260px",
          background: "#fffaf4",
          zIndex: 1002,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          display: "flex",
          flexDirection: "column",
          boxShadow: open ? "4px 0 20px rgba(0,0,0,0.15)" : "none",
        }}
      >
        {/* Sidebar header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 1.5rem",
          borderBottom: "1px solid #f0e5dc",
        }}>
          <span style={{ fontWeight: "bold", color: "#b45b3e", fontSize: "1.1rem" }}>
            De Speciaalzaak
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Menu sluiten"
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "1.4rem", color: "#5c4033", lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", padding: "1rem 0", flex: 1 }}>
          {NAV_LINKS.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                style={{
                  padding: "0.85rem 1.5rem",
                  color: active ? "#b45b3e" : "#3b2c24",
                  fontWeight: active ? "700" : "500",
                  textDecoration: "none",
                  borderLeft: active ? "4px solid #b45b3e" : "4px solid transparent",
                  fontSize: "1rem",
                  background: active ? "#f5ede5" : "transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Footer in sidebar */}
        <div style={{
          padding: "1.25rem 1.5rem",
          borderTop: "1px solid #f0e5dc",
          fontSize: "0.8rem",
          color: "#9c7a6a",
        }}>
          <p style={{ margin: 0 }}>Herenstraat 16, Voorburg</p>
          <p style={{ margin: "0.25rem 0 0" }}>Di–Za: 09:00–16:00</p>
        </div>
      </nav>
    </>
  );
}
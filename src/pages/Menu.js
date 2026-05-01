import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const menuImages = [
    { src: "/images/menuvoorblad.jpg", alt: "Menu voorblad – De Speciaalzaak" },
    { src: "/images/menulunch.jpg",    alt: "Lunch menukaart – De Speciaalzaak" },
    { src: "/images/menudranken.jpg",  alt: "Dranken menukaart – De Speciaalzaak" },
    { src: "/images/menuborrel.jpg",   alt: "Borrel menukaart – De Speciaalzaak" },
  ];

  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>

      {/* English menu banner */}
      <div style={{
        textAlign: "center",
        padding: "14px",
        backgroundColor: "#f5f0eb",
        borderBottom: "1px solid #ddd",
        fontSize: "1rem",
      }}>
        Looking for this menu in English?{" "}
        <Link
          to="/menuspring"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          Click here for the English menu
        </Link>
      </div>

      {menuImages.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          style={{ width: "100%", display: "block" }}
        />
      ))}
    </div>
  );
}
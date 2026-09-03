import React from "react";

export default function Evenementen() {
  const eventImages = [
    { src: "/images/september.jpg", alt: "Events september – De Speciaalzaak" },
    { src: "/images/oktober.jpg", alt: "Events oktober – De Speciaalzaak" }
  ];

  return (
    <div className="taarten-page">
      {/* Hero: volledige afbeelding zichtbaar op volledige breedte */}
      <img
        src="/images/speciaalzaak.jpg"
        alt="De Speciaalzaak"
        style={{ width: "100%", display: "block" }}
      />

      {/* Kalender Grid */}
      <section className="evenementen-kalender">
        <h2 className="evenementen-title">Aankomende Evenementen</h2>

        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
          {eventImages.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
import React from "react";

export default function Evenementen() {
  const eventImages = [
    { src: "/images/poster1.png", alt: "Events mei – De Speciaalzaak" },
    { src: "/images/poster2.png", alt: "Events juni – De Speciaalzaak" },
  ];

  return (
    <div className="taarten-page">
      {/* Hero Section */}
      <section
        className="taarten-hero"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?pastry-shop,bakery,cakes')",
        }}
      >
        <div className="hero-overlay">
          <h1>Onze Evenementen</h1>
          <h3>Heeft u iets te vieren?</h3>
          <p>
            Dat kan bij ons! Wij denken graag met u mee en hebben volop leuke
            ideeën om er een bijzonder moment van te maken.
          </p>
          <p>
            Omdat De Speciaalzaak niet alle dagen geopend is, bestaat de
            mogelijkheid om onze sfeervolle lunchroom af te huren voor een eigen
            evenement of bijeenkomst.
          </p>
          <p>
            Daarnaast organiseren we regelmatig inspirerende workshops voor
            ouders, begeleiders en leerkrachten. Een leuke manier om kennis te
            maken met ons team en te ontdekken wat De Speciaalzaak zo bijzonder
            maakt.
          </p>
        </div>
      </section>

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
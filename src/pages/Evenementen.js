import React from "react";

export default function Evenementen() {

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
          <h3> Heeft u iets te vieren? </h3>

          <p> Dat kan bij ons! Wij denken graag met u mee en hebben volop leuke ideeën om er een bijzonder moment van te maken. </p>
 
          <p> Omdat De Speciaalzaak niet alle dagen geopend is, bestaat de mogelijkheid om onze sfeervolle lunchroom af te huren voor een eigen evenement of bijeenkomst. </p>
 
          <p> Daarnaast organiseren we regelmatig inspirerende workshops voor ouders, begeleiders en leerkrachten. Een leuke manier om kennis te maken met ons team en te ontdekken wat De Speciaalzaak zo bijzonder maakt.</p>
          
        </div>
      </section>

      
      {/* Kalender Grid */}
      <section className="evenementen-kalender">
        <h2 className="evenementen-title">Aankomende Evenementen</h2>
        
        <div className="evenementen-grid">
          {/* Event Card */}
          <div className="event-card">
            {/* Datum Badge */}
            <div className="event-date-badge">
              <div className="date-day">9</div>
              <div className="date-month">december</div>
              <div className="date-year">2025</div>
            </div>
            
            {/* Event Details */}
            <div className="event-content">
              <h3 className="event-title">
                ☕ Barista Workshop voor Leerkrachten
              </h3>
              
              <div className="event-detail">
                <strong>📅 Tijd:</strong> Dinsdag, 9 december
              </div>
              
              <div className="event-detail">
                <strong>👥 Doelgroep:</strong> Leerkrachten
              </div>
              
              <p className="event-description">
                Leer de fijne kneepjes van het barista-vak tijdens deze inspirerende workshop speciaal voor leerkrachten.
              </p>
             
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

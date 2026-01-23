import React, { useState } from "react";

export default function Menu() {

  const [activeTab, setActiveTab] = useState("ontbijt");

  return (
    <div className="menukaart-page">
      {/* Hero */}
      <section
        className="menukaart-hero"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?coffee,brunch,bakery,lunch,restaurant')",
        }}
      >
        <div className="menukaart-overlay">
          <h1>Onze Menukaart ☕🥪</h1>
          <p>
            Bij De Speciaalzaak draait alles om vers, huisgemaakt en met
            aandacht bereid eten. Van een gezellig ontbijt tot een warme lunch —
            je proeft de passie en aandacht in elk gerecht.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="menu-tabs">
        <button
          className={activeTab === "ontbijt" ? "active" : ""}
          onClick={() => setActiveTab("ontbijt")}
        >
          🍳 Ontbijt
        </button>
        <button
          className={activeTab === "lunch" ? "active" : ""}
          onClick={() => setActiveTab("lunch")}
        >
          🍽️ Lunch
        </button>
        <button
          className={activeTab === "dranken" ? "active" : ""}
          onClick={() => setActiveTab("dranken")}
        >
          ☕ Dranken
        </button>
      </div>

      {/* Menukaart */}
      <section className="menukaart-section">
        {activeTab === "ontbijt" && (
        <div className="menu-grid">
          {/* Ontbijt */}
          <div className="menu-card">
            <h2>Ontbijt (Tot 12)</h2>
            <ul>
              <li><span>Roomboter Croissant</span><span>2,5</span></li>
              <p>Met huisgemaakte Jam & Boter</p>
              <p style={{fontWeight: '600', marginTop: '0.8rem', marginBottom: '0.3rem'}}>Extra's:</p>
              <p style={{marginLeft: '1rem', margin: '0.2rem 0 0.2rem 1rem'}}>Kaas 1</p>
              <p style={{marginLeft: '1rem', margin: '0.2rem 0 0.2rem 1rem'}}>Gebakken Ei 2</p>

              <li><span>Griekse Yoghurt</span><span>8,5</span></li>
              <p>Met huisgemaakte Granola, Vers Fruit & Honing</p>

              <li><span>Uitsmijter</span><span>9,5</span></li>
              <p>3 eieren op twee broodjes met Kaas & Ham</p>

              <li><span>English Breakfast</span><span>12</span></li>
              <p>Toast met ei, ham, spek, champignons, bonen in tomatensaus & worst</p>
            </ul>
          </div>

          {/* Tosti */}
          <div className="menu-card">
            <h2>Tosti</h2>
            <p style={{textAlign: 'center', fontStyle: 'italic', marginBottom: '1.5rem'}}>Stel je eigen Tosti samen<br/>Precies hoe jij hem lekker vindt!</p>
            <ul>
              <li><span>Tosti Kaas</span><span>5</span></li>
              <p>Met Ketchup</p>
              <p>Keuze uit: wit of bruin brood</p>
              <p style={{fontWeight: '600', marginTop: '0.8rem', marginBottom: '0.3rem'}}>Extra's:</p>
              <p style={{marginLeft: '1rem', margin: '0.2rem 0 0.2rem 1rem'}}>Tomaat 0,5</p>
              <p style={{marginLeft: '1rem', margin: '0.2rem 0 0.2rem 1rem'}}>Ham 1</p>
              <p style={{marginLeft: '1rem', margin: '0.2rem 0 0.2rem 1rem'}}>Spek 1</p>
              <p style={{marginLeft: '1rem', margin: '0.2rem 0 0.2rem 1rem'}}>Gecarameliseerde Ui 1</p>
              <p style={{marginLeft: '1rem', margin: '0.2rem 0 0.2rem 1rem'}}>Avocado 1</p>
              <p style={{marginLeft: '1rem', margin: '0.2rem 0 0.2rem 1rem'}}>Gebakken Ei 2</p>
            </ul>
          </div>
        </div>
        )}

        
{activeTab === "lunch" && (
  <div className="menu-grid">

    {/* Lunch */}
    <div className="menu-card">
      <h2>Lunch</h2>
      <ul>
        <li><span>Soep van de dag</span><span>8</span></li>
        <p>Met brood en huisgemaakte kruidenboter.</p>

        <li><span>Pokebowl salade</span><span>12,5</span></li>
        <p>Met mais, wortel, avocado, rodekool, edamame, mango, wasabi-soja dressing. Keuze uit kip of tonijn.</p>
      </ul>
    </div>

    {/* Broodjes */}
    <div className="menu-card">
      <h2>Broodjes</h2>
      <ul>
        <li><span>Broodje Bal Jordaan (warm)</span><span>10</span></li>
        <p>Met coleslaw & mosterdmayonaise.</p>

        <li><span>Broodje Beenham (warm)</span><span>10</span></li>
        <p>Met rucola en honingmosterd.</p>

        <li><span>De Bagel (lauw/warm)</span><span>10</span></li>
        <p>Met avocado, knoflookchampignons, cherrytomaatjes, feta & srirachamayo.</p>

        <li><span>Tonijnsalade (koud)</span><span>10</span></li>
        <p>Met rucola, appel, augurk, lente ui & mayonaise.</p>

        <li><span>Filet American Speciaal (koud)</span><span>10</span></li>
        <p>Met rucola, ei, parmezaan & truffelmayo.</p>
      </ul>
    </div>

    {/* Lekkere Trek */}
    <div className="menu-card">
      <h2>Lekkere trek</h2>
      <ul>
        <li><span>Frietjes</span><span>4,5</span></li>
        <p>Met mayonaise.</p>

        <li><span>Frietje Parmezaan</span><span>6</span></li>
        <p>Met lente ui & truffelmayo.</p>

        <li><span>Loaded Fries</span><span>9</span></li>
        <p>Met kip, mais, lente ui, kaas & mayonaise.</p>
      </ul>
    </div>

  </div>
)}


    

        {activeTab === "dranken" && (
          <div className="menu-grid">
            <div className="menu-card">
              <h2>Warme Dranken</h2>
              <h3
  style={{
    fontSize: '1.3rem',
    color: '#5c4033',
    marginTop: '1.5rem',
    marginBottom: '0.8rem',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  }}
>
  Koffie
</h3>
              <ul>
                <li><span>Koffie</span><span>3</span></li>
                <li><span>Espresso</span><span>3</span></li>
                <li><span>Cappuccino</span><span>3,5</span></li>
                <li><span>Sterke Cappuccino</span><span>3,5</span></li>
                <li><span>Koffie Verkeerd</span><span>3,5</span></li>
                <li><span>Latte Macchiato</span><span>4</span></li>
              </ul>
              <p style={{fontWeight: '600', marginTop: '0.8rem', marginBottom: '0.3rem'}}>Alternatieve Melk?</p>
              <p style={{marginLeft: '1rem', margin: '0.2rem 0 0.2rem 1rem'}}>Havermelk 0,5</p>
              <p style={{marginLeft: '1rem', margin: '0.2rem 0 0.2rem 1rem'}}>Kokosmelk 0,5</p>


              <h3
  style={{
    fontSize: '1.3rem',
    color: '#5c4033',
    marginTop: '1.5rem',
    marginBottom: '0.8rem',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  }}
>
  Thee
</h3>
              <ul>
                <li><span>Thee (Losse Thee)</span><span>3</span></li>
                <li><span>Verse Gemberthee</span><span>3,5</span></li>
                <li><span>Verse Muntthee</span><span>3,5</span></li>
                <li><span>Pot Thee</span><span>6,5</span></li>
              </ul>
<h3
  style={{
    fontSize: '1.3rem',
    color: '#5c4033',
    marginTop: '1.5rem',
    marginBottom: '0.8rem',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  }}
>
 Choco
</h3>
              <ul>
                <li><span>Warme Chocomel</span><span>4</span></li>
              </ul>
              <p style={{fontSize: '0.85rem'}}>Met slagroom + 0,5</p>
            </div>

            <div className="menu-card">
              <h2>Taart</h2>
              <ul>
                <li><span>Taart</span><span>4,5</span></li>
                <p>Taarten vers gebakken uit eigen oven door onze patissier Khushbu</p>
                <p style={{fontSize: '0.85rem'}}>Met slagroom + 0,5</p>

                <li><span>Chocoladetaart</span><span>5,5</span></li>
                <p>Met framboos</p>

                <li><span>Appeltaart</span><span>5,5</span></li>
                <p>Met cranberries</p>

                <li><span>Opera Cake</span><span>5,5</span></li>
                <p>Met koffie en chocola</p>

                <li><span>Carrotcake</span><span>5,5</span></li>
                <p>Met creamcheese</p>
              </ul>
            </div>

            <div className="menu-card">
              <h2>Koude dranken</h2>

    <h3
  style={{
    fontSize: '1.3rem',
    color: '#5c4033',
    marginTop: '1.5rem',
    marginBottom: '0.8rem',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  }}
>
  Soda's 
</h3>
    <ul>
      <li><span>Coca-Cola / Coca-Cola Zero</span><span>3</span></li>
      <li><span>Fanta Orange</span><span>3</span></li>
      <li><span>Fanta Cassis</span><span>3</span></li>
      <li><span>Fuzetea Sparkling Lemon</span><span>3</span></li>
      <li><span>Sprite Zero</span><span>3</span></li>
      <li><span>Tonic</span><span>3</span></li>
      <li><span>Ginger Ale</span><span>3</span></li>
      <li><span>Chaudfontaine rood/blauw</span><span>3</span></li>
      <li><span>Karaf tapwater</span><span>4</span></li>
    </ul>

    <h3
  style={{
    fontSize: '1.3rem',
    color: '#5c4033',
    marginTop: '1.5rem',
    marginBottom: '0.8rem',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  }}
>
  Homemade
</h3>
    <ul>
      <li><span>Homemade iced tea</span><span>4</span></li>
    </ul>

    <h3
  style={{
    fontSize: '1.3rem',
    color: '#5c4033',
    marginTop: '1.5rem',
    marginBottom: '0.8rem',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  }}
>
  Sapjes
</h3>
    <ul>
      <li><span>Appelsap</span><span>4</span></li>
      <li><span>Vers geperste sinaasappelsap</span><span>5</span></li>
    </ul>
  </div>

            <div className="menu-card">
              <h2>Alcoholische Dranken</h2>
              <ul>
                <li><span>Bier</span><span>4</span></li>
                <p>Hertog Jan 0.3</p>

                <li><span>Wijnen</span><span>6</span></li>
                <p>Wit:</p>
                <p>Chardonnay Josephine 2024 13,5%</p>
                <p>Een frisse die doet denken aan cirtoentaart, banaan, peer, vanille en kastanje</p>
                
                <p style={{marginTop: '1rem'}}>Rood:</p>
                <p>Rioja XIII Lunas 2018 14%</p>
                <p>een blend van Tempranillo en Garnacha
uit de rioja streek, en 12 maanden gerijpt</p>
                
                <p style={{marginTop: '1rem'}}>Cava:</p>
                <p>Perelda 2023 11,5%</p>
                <p>een klassieke cava die gemixt is van verschillende
druivenrassen, tot 15 maanden gerijpt</p>
              </ul>
            </div>
          </div>
        )}

        <p className="menu-footer">
          Alles wordt met liefde en aandacht bereid 💛
        </p>
      </section>
    </div>
  );
}
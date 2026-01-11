import React from "react";
import "../App.css";

export default function Menu() {
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

      {/* Menukaart */}
      <section className="menukaart-section">
        <div className="menu-grid">
          {/* Ontbijt */}
          <div className="menu-card">
            <h2>Ontbijt / Start van de dag</h2>
            <ul>
              <li><span>Ontbijtplankje Speciaal</span><span>15,-</span></li>
              <p>Vers brood naar keuze met huisgemaakte jam, kaas, ham, eitje, yoghurt met granola, jus en koffie/thee.</p>

              <li><span>Lekker eitje als ontbijtje</span><span>11,-</span></li>
              <p>Scrambled, omelet of spiegelei met kaas, ham of spek. Met brood naar keuze.</p>

              <li><span>Pannenkoeken</span><span>8,-</span></li>
              <p>Kies: Nutella, kaas, spek, stroop of roomboter met poedersuiker.</p>

              <li><span>Yoghurt met fruit & granola</span><span>8,-</span></li>
              <p>Romige yoghurt met huisgemaakte granola en seizoensfruit.</p>

              <li><span>Verse jus d’orange</span><span>5,00</span></li>
              <li><span>Smoothie van de dag</span><span>6,50</span></li>
            </ul>
          </div>

          {/* Tosti & Panini’s */}
          <div className="menu-card">
            <h2>Tosti & Panini’s</h2>
            <ul>
              <li><span>Tosti Speciaalzaak</span><span>8,50</span></li>
              <p>Boerenkaas op vers vloerbrood, extra keuze uit ham, spek, tomaat, avocado of ui.</p>

              <li><span>Panini Caprése</span><span>8,50</span></li>
              <p>Mozzarella, pesto, kappertjes, tomaat en pestomayonaise.</p>

              <li><span>Panini Brie</span><span>8,50</span></li>
              <p>Brie, spek, vijgenjam en pecannoten — zacht en romig.</p>
            </ul>
          </div>

          {/* Soepen */}
          <div className="menu-card">
            <h2>Soepen</h2>
            <ul>
              <li><span>Tomatensoep</span><span>8,-</span></li>
              <p>Met mascarpone, brood, knoflookboter en humus.</p>

              <li><span>Soep van de dag</span><span>8,-</span></li>
              <p>Vraag ons team wat er vandaag op het vuur staat.</p>
            </ul>
          </div>

          {/* Salades */}
          <div className="menu-card">
            <h2>Salades</h2>
            <ul>
              <li><span>Poké Bowl van Merel</span><span>€14,-</span></li>
              <p>Kip, paprika, maïs, avocado, edamame, mango en soja-wasabi dressing.</p>

              <li><span>Tonijnsalade Speciaalzaak</span><span>€14,-</span></li>
              <p>Tonijn, paprika, appel, walnoot, tomaat, ui, komkommer en basilicumdressing.</p>
            </ul>
          </div>

          {/* Warme Lunch */}
          <div className="menu-card">
            <h2>Warme Lunch</h2>
            <ul>
              <li><span>Bordje Ongezond</span><span>8,-</span></li>
              <p>Eén huisgemaakte kroket (vega of kip) met frites of brood naar keuze. Wil je
              twee kroketten dan betaal je 12,-</p>

              <li><span>Broodje Bal</span><span>8,-</span></li>
              <p>Heerlijke ouderwetse huisgemaakte Bal gehakt uit de Jus. Wil je twee van die
              overheerlijke ballen dan betaal je 12,-</p>

              <li><span>Een ei hoort erbij</span><span>11,-</span></li>
              <p>Scrambled, omelet of spiegelei met kaas, ham of spek op brood naar keuze.</p>

              <li><span>Kip cashew speciaal</span><span>€13,-</span></li>
              <p>Kipfilet met ketjap, honing, paprika, cashewnoten en srirachamayonaise.</p>
            </ul>
          </div>

          {/* Koude Lunch */}
          <div className="menu-card">
            <h2>Koude Lunch</h2>
            <ul>
              <li><span>Pittige tonijn</span><span>11,-</span></li>
              <p>Italiaanse bol met tonijn, jalapeño, roomkaas, cheddar en pittige dressing.</p>

              <li><span>Het gezonde broodje</span><span>11,-</span></li>
              <p>Kaas, tomaat, humus, ei en mayonaise op Italiaanse bol.</p>

              <li><span>Heerlijke Bagel</span><span>10,-</span></li>
              <p>Bagel met avocado, feta, geroosterde tomaat en knoflookchampignons.</p>
            </ul>
          </div>
        </div>

        <p className="menu-footer">
          * Keuze uit: Wit – Meergranen – Spelt – Glutenvrij of Italiaanse bol (wit, bruin, spelt).  
          <br />Alle gerechten worden met liefde en aandacht bereid 💛
        </p>
      </section>
    </div>
  );
}

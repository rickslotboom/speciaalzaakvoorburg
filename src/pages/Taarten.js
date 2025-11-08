import React from "react";

export default function Taarten() {
  const taarten = [
    {
      id: 1,
      title: "Appeltaart",
      img: "/images/appeltaart.jpg",
      desc: "Een klassieke, huiselijke appeltaart met een krokante, boterige korst en een zachte vulling van appel en warme specerijen. Licht gezoet en heerlijk aromatisch.",
      ingredienten: "Appels, boter, bloem, suiker, kaneel, citroen, eieren, vanille."
    },
    {
      id: 2,
      title: "Chocoladetaart",
      img: "/images/chocolatecake.jpg",
      desc: "Rijke en luchtige lagen chocoladecake met een romige, volle chocoladeroom. Een pure verwennerij voor chocoladeliefhebbers.",
      ingredienten: "Bloem, cacao, suiker, eieren, boter, melk, bakpoeder, vanille, chocolade (voor de frosting)."
    },
    {
      id: 3,
      title: "Opera Cake (Glutenvrij)",
      img: "/images/opera-cake.jpg",
      desc: "Een elegante Franse laagjescake met amandelbiscuit, zachte koffiebotercrème en een glanzende chocoladeganache. Delicaat, luxueus en zonder gluten, met behoud van de klassieke smaak.",
      ingredienten: "Amandelmeel (in plaats van bloem), suiker, eieren, boter, espresso of sterke koffie, pure chocolade, room. Let op: Controleer dat alle gebruikte chocolade en bakingrediënten gecertificeerd glutenvrij zijn."
    },
    {
      id: 4,
      title: "Worteltaart (Carrot Cake)",
      img: "/images/worteltaart.jpg",
      desc: "Een zachte, kruidige worteltaart met walnoten en een romige roomkaasglazuur. Hartverwarmend, sappig en vol smaak.",
      ingredienten: "Wortel, bloem, suiker, eieren, olie, kaneel en andere bakspices, walnoten (optioneel), roomkaas, boter, poedersuiker, vanille."
    },
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
          <h1>Onze Taarten 🍰</h1>
          <p>
            Bij De Speciaalzaak worden alle taarten met liefde en aandacht
            gemaakt – gewoon in onze eigen keuken. Klassiekers zoals onze
            huisgemaakte appeltaart met een vleugje kaneel of de fluweelzachte
            chocoladetaart met romige topping… alles komt vers uit onze oven.
          </p>
          <p>
            We gebruiken alleen goede, eerlijke ingrediënten en bakken met een
            glimlach – dat proef je bij elke hap. Wil je iets bijzonders vieren?
            Dat kan natuurlijk! We maken ook speciale taarten op bestelling –
            voor verjaardagen, feestjes of andere mooie gelegenheden.
          </p>
        </div>
      </section>

      {/* Tegel Grid */}
      <section className="taarten-grid">
        {taarten.map((taart) => (
          <div key={taart.id} className="taart-tile">
            <div className="taart-image-wrapper">
              <img src={taart.img} alt={taart.title} />
            </div>
            <div className="taart-info">
              <h3>{taart.title}</h3>
              <p>{taart.desc}</p>
              {taart.ingredienten && (
                <div className="taart-ingredienten">
                  <h4>🌿 Ingrediënten</h4>
                  <p>{taart.ingredienten}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
import React from "react";

export default function Menu() {
  return (
    <div className="menukaart-page">
      {/* Hero / Intro */}
      <section
        className="menukaart-hero"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?coffee-latte,brunch,lunch,table,restaurant')",
        }}
      >
        <div className="menukaart-overlay">
          <h1>Onze Menukaart ☕🥪</h1>
          <p>
            Onze menukaart verandert mee met de seizoenen, zodat we altijd
            werken met wat de natuur op dat moment te bieden heeft. We werken
            samen met lokale leveranciers die, net als wij, oog hebben voor
            kwaliteit en duurzaamheid.
          </p>
          <p>
            In onze keuken maken we zoveel mogelijk zelf: van huisgemaakte
            soepen tot versgebakken taarten en smaakvolle lunches. Je proeft de
            aandacht, de gezelligheid en een vleugje eigenheid in elk gerecht.
          </p>
          <p>
            En dan onze koffie... Wij zijn heel blij met onze leverancier uit
            Den Haag. De bonen zijn vers, puur en vol karakter — en dat proef je
            bij elke slok.
          </p>
        </div>
      </section>

      {/* Placeholder menukaart */}
      <section className="menukaart-preview">
        <h2>Binnenkort: onze volledige menukaart</h2>
        <p>
          We werken op dit moment aan een digitale menukaart met al onze
          heerlijke gerechten, drankjes en specials. Kom snel terug om deze te
          bekijken!
        </p>

        <div className="menu-placeholder">
          <img
            src="https://cdn.dribbble.com/userupload/13574044/file/original-ad00277a50e9dc6788c49c22153891df.png?resize=400x0"
            alt="Menukaart voorbeeld"
          />
        </div>
      </section>
    </div>
  );
}

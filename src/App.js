import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homep";
import Taarten from "./pages/Taarten";
import Menu from "./pages/Menu";
import MenuLente from "./pages/MenuLente";
import MenuSpring from "./pages/MenuSpring";
import Medewerkers from "./pages/Medewerkers";
import MedewerkerDetail from "./pages/MedewerkerDetail";
import Evenementen from "./pages/Evenementen";
import Reserveren from "./pages/Reserveren";
import PaasbrunchReserveren from "./pages/paasBrunchReserveren";

import "./App.css";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taarten" element={<Taarten />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menulente" element={<MenuLente />} />
        <Route path="/menuspring" element={<MenuSpring />} />
        <Route path="/medewerkers" element={<Medewerkers/>} />
        <Route path="/medewerkers/:id" element={<MedewerkerDetail />} />
        <Route path="/evenementen" element={<Evenementen />} />
        <Route path="/reserveren" element={<Reserveren />} />
        <Route path="/paasbrunch" element={<PaasbrunchReserveren />} />
      </Routes>
    </BrowserRouter>
  );
}

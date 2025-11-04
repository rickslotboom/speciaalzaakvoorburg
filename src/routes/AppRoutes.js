import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Taarten from "./pages/Taarten";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taarten" element={<Taarten />} />
      </Routes>
    </BrowserRouter>
  );
}

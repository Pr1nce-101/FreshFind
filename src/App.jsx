import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import MarketDirectory from "./pages/MarketDirectory";
import MarketDetails from "./pages/MarketDetails";
import ProduceGuide from "./pages/ProduceGuide";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";

import "./App.css";
import "./pages/fresh.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<MarketDirectory />} />
        <Route path="/markets/:id" element={<MarketDetails />} />
        <Route path="/produce" element={<ProduceGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
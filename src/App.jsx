import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MarketDirectory from "./pages/MarketDirectory";
import ProduceGuide from "./pages/ProduceGuide";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BookMarks from "./pages/BookMarks";
import Login from "./pages/Login";
import MobileMenu from './components/MobileMenu'; 
import Footer from './components/Footer'; 
import { BookmarkProvider } from "./components/BookmarkContext";


import "./App.css";
import "./styles/fresh.css";

function App() {
  return (
    <BookmarkProvider>
    <BrowserRouter>
      <Navbar />
      <MobileMenu /> 

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/markets" element={<MarketDirectory />} />
        <Route path="/produce" element={<ProduceGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Login />} />
        <Route path="/bookmarks" element={<BookMarks />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </BookmarkProvider>
  );
}

export default App;
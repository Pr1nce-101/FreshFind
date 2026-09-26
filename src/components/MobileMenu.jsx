import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/MobileMenu.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="mobile-menu-wrapper">
      {/* Hamburger Toggle Button (Sits right inside the header bar) */}
      <button 
        className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMenu}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-links" style={{ listStyleType: 'none', padding: 0 }}>
              <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink to="/directory" onClick={closeMenu}>Directory</NavLink></li>
              <li><NavLink to="/produce" onClick={closeMenu}>Produce Guide</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
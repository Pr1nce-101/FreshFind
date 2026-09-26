import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css'; 
import logo1 from '../images/logo.png';
import logo2 from '../images/logo-text.png';
import fb from '../assets/fb.png';
import lin from '../assets/lin.png';
import ig from '../assets/ig.png';
import x from '../assets/X.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Column 1: Brand Info */}
        <div className="footer-col footer-brand-col">
          <div className="FF-logo">
                <img src={logo1} alt="FreshFind-logo" className="logo1" />
                <img src={logo2} alt="FreshFind-logo-text" className="logo2" />
            </div>
          <p className="footer-tagline">Connecting You to Fresh Local Produce</p>
          <p className="footer-subtext">Quality farm-fresh markets and produce directory in your region.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col footer-links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/marketdetails">Find a Market</NavLink></li>
            <li><NavLink to="/directory">Directory</NavLink></li>
            <li><NavLink to="/produce">Produce Guide</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="footer-col footer-contact-col">
          <h4>Follow Us</h4>
          
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src={fb} alt="f"/> <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={lin} alt="in" /><i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src={ig} alt="ig" /><i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <img src={x} alt="X" /> <i className="fab fa-x-twitter"></i>
            </a>
          </div>

          <div className="contact-details">
            <p><span className="icon">📧</span> info@freshfind.com</p>
            <p><span className="icon">📞</span> +234 801 234 5678</p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p>© {new Date().getFullYear()} FreshFind. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
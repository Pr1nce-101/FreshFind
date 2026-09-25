import React from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import pic1 from '../images/logo.png'
import pic2 from '../images/logo-text.png'
import '../styles/fresh.css'


function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className='nav-items'>
        <div className='FF-logo'>
          <img src={pic1} alt="FreshFind-logo" className='logo1'/>
          <img src={pic2} alt="FreshFind-logo-text" className='logo2'/>
        </div>

        <ul className='nav-links' style={{listStyleType: 'none'}}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/marketdetails">Find a Market</NavLink></li>
          <li><NavLink to="/directory">Directory</NavLink></li>
          <li><NavLink to="/produce">Produce Guide</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>

        <button className='btn-login'onClick={() => navigate('/login')}>
          <b>Login/Register</b>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
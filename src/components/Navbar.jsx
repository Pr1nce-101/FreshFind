import React from 'react'
import { NavLink } from 'react-router-dom'
import pic1 from '../images/logo.png'
import pic2 from '../images/logo-text.png'
import '../styles/fresh.css'


function Navbar() {
  return (
    <nav>
      <div className='nav-items'>
        <div className='logo-container'>
          <img src={pic1} alt="FreshFind-logo" className='logo1'/>
          <img src={pic2} alt="FreshFind-logo-text" className='logo2'/>
        </div>

        <ul className='nav-links' style={{listStyleType: 'none'}}>
          <li>Find a Market</li>
          <li>Directory</li>
          <li>Produce Guide</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <button className='login-button'>
          <b>Login/Register</b>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
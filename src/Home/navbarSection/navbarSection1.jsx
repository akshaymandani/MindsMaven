import React, { useState } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";
import MMLogo from "../../images/MindsMaven Logo.png";
import "./navbarSection.css";

const NavbarSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={MMLogo} alt="MindsMaven Logo" />
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className="dropdown">
          <a href="#about-us">About us <TiArrowSortedDown /></a>
          <div className="dropdown-content">
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#life">Life@Tagline Infotech</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#hire-developers">Hire Developers</a>
          <div className="dropdown-content">
          
            <a href="#React">Hire ReactJS Developer</a>
            <a href="#Angular">Hire AngularJS Developer</a>
            <a href="#NextJS">Hire NextJS Developer</a>
            <a href="#NodeJS">Hire NodeJS Developer</a>
            <a href="#Flutter">Hire Flutter Developer</a>
            <a href="#ReactNative">Hire React Native Developer</a>
          </div>
        </li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#industry">Industry</a></li>
      </ul>
      <div className="quote-button">
                    <button className='nav-btn'>GET QUOTE</button>
                </div>
    </nav>
  );
};

export default NavbarSection;

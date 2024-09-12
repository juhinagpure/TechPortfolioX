import React, { useState } from "react";
import "../styles/Header.css";
import logoImage from '../assets/images/tez-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="contact-info">
        <span>📞 +91 89566 10799 | ✉ hr@teztecch.com</span>
      </div>
      <nav className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="TezTech Logo" className="logo" />
      </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Product</li>
          <li>Programs</li>
          <li>Portfolio</li>
          <li>Clients</li>
          <li>Blog</li>
          <li>Our Culture</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

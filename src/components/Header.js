import React, { useState } from "react";
import "../styles/Header.css";
import logoImage from "../assets/images/tez-logo.png";
import { Mail, PhoneCall } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact">
            <PhoneCall size={16} />
            <span>+91 89566 10799</span>
          </div>
          <div className="contact">
            <Mail size={16} />
            <span>hr@teztecch.com</span>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <img src={logoImage} alt="TezTech Logo" className="logo" />
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

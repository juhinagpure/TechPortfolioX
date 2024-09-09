import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="contact-info">
        <span>📞 +91 89566 10799 | ✉ hr@teztecch.com</span>
      </div>
      <nav>
        <ul className="menu">
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

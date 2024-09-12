import React from 'react';
import '../styles/Portfolio.css';

const PortfolioItem = ({ image, title }) => {
  return (
    <div className="portfolio-item">
      <img src={image} alt={title} />
      <div className="overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioItem;

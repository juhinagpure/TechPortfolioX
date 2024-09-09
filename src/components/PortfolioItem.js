import React from 'react';

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
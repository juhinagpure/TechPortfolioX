import React from 'react';
import PortfolioItem from './PortfolioItem';
import '../styles/Portfolio.css';

const portfolioItems = [
  { id: 1, image: require('../assets/images/suruchi.jpg'), title: 'Suruchi Ketchup' },
  { id: 2, image: require('../assets/images/sarja.jpg'), title: 'Sarla' },
  { id: 3, image: require('../assets/images/queens.jpg'), title: "Queen's Lawn" },
  { id: 4, image: require('../assets/images/vibroxx.jpg'), title: 'Vibroxx' },
  { id: 5, image: require('../assets/images/dashboard.png'), title: 'Dashboard' },
  { id: 6, image: require('../assets/images/mobile.jpg'), title: 'Mobile Enabled' },
  { id: 6, image: require('../assets/images/scentwala.jpg'), title: 'scentwala' },
  { id: 6, image: require('../assets/images/visual.jpg'), title: 'Visual' },


];

const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-categories">
        <button>Website Design & Development</button>
        <button>Digital Marketing</button>
        <button>Animation</button>
        <button>Graphics</button>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <PortfolioItem key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
      <button className="view-all">VIEW ALL</button>
    </div>
  );
};

export default Portfolio;
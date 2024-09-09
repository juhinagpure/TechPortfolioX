import React from 'react';
import "../styles/Product.css";

const products = [
  {
    title: 'Mini Website + E-Broucher',
    description: 'Inspire your client. Digitally',
    buttonText: 'KNOW MORE',
    imageUrl: require('../assets/images/1.jpg'), // Proper path to img1
  },
  {
    title: 'Digital Event Card',
    description: 'Smart, Waste-Free Weddings',
    buttonText: 'KNOW MORE',
    imageUrl: require('../assets/images/2.jpg'), // Proper path to img2
  },
  {
    title: 'Digital Company Profile',
    description: 'Your End-to-End',
    buttonText: 'DOWNLOAD',
    imageUrl: require('../assets/images/3.jpg'), 
  },
];

const Products = () => {
  return (
    <div className="products-section">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imageUrl} alt={product.title} />
            <div className="product-info">
              <h3>{product.description}</h3>
              <p>{product.title}</p>
              <button>{product.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import "../styles/Product.css";

const products = [
  {
    title: "Mini Website + E-Broucher",
    buttonText: "KNOW MORE",
    imageUrl: require("../assets/images/1.jpg"),
  },
  {
    title: "Digital Event Card",

    buttonText: "KNOW MORE",
    imageUrl: require("../assets/images/2.jpg"),
  },
  {
    title: "Digital Company Profile",

    buttonText: "DOWNLOAD",
    imageUrl: require("../assets/images/3.jpg"),
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

import React from 'react';

const Products = ({ product }) => {
  if (!product) {
    return null; // You can return null or display a loading message
  }

  return (
    <div className="product-card">
      <img src={product.imageURL} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Products;
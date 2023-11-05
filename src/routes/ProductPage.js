import React, { useState, useEffect } from 'react';
import Products from '../components/Products';
import ProdcutDetail from '../components/ProdcutDetail';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your data source (e.g., an API)
    fetch('http://localhost:4000/product/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
     
  }, []);

  return (
    <div className="xz">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <Products key={product._id} product={product} />
        ))}
      </div>
      <ProdcutDetail/>
    </div>
  );
};

export default ProductPage;
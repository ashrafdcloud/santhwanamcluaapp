import React, { useState, useEffect } from 'react';
import Products from './Products';
import ProdcutDetail from './ProdcutDetail';
import { fetchProducts } from '.././api';
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setselectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts()
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching employees:", error));
    }, [products]);

    return (
        <div className='employeelist'>
            <h1>Product List</h1>
            <ul>
            {products.map(product => (
                <li key={product._id}>
                    <Link to={`/product/products/${product._id}`}>
                        <Products product={product} />
                    </Link>
                </li>
            ))}
        </ul>

        </div>
    );
}

export default ProductList;
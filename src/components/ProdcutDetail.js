import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProdcutDetail() {
    const { id } = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        // Assuming you have an API endpoint that fetches an employee by ID
        fetch(`http://localhost:4000/product/products/${id}`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching employee details:", error));
    }, [id]);
    if (!products) return <p>Loading...</p>;
    return (
        <div>
            <div className="product-card">
                <img src={products.imageURL} alt={products.name} />
                <h3>{products.name}</h3>
                <p>{products.description}</p>
                <p>Price: ${products.price}</p>
                <p>Category: ${products.category}</p>
            </div>
        </div>
    )
}

export default ProdcutDetail

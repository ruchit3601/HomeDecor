import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/ViewProduct.css"; // Import CSS file

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div className="view-product-container">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="product-image"/>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      <Link to="/" className="back-btn">🔙 Back to Home</Link>
    </div>
  );
};

export default ViewProduct;

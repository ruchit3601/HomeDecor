import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/EditProduct.css"; // Ensure this file exists

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    imageUrl: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/products/${id}`, product)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <div className="edit-product-container">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit} className="edit-product-form">
        <label>Product Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />

        <label>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} required />

        <label>Price ($):</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />

        <label>Stock Quantity:</label>
        <input type="number" name="stock" value={product.stock} onChange={handleChange} required />

        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} required />

        <button type="submit" className="update-btn">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AddProduct.css"; // Ensure this file exists

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { name, category, price, stock, imageUrl };

    axios.post("http://localhost:5000/api/products", newProduct).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="add-product-container">
      <h1>Add a New Product</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <label>Product Name:</label>
        <input type="text" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Category:</label>
        <input type="text" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)} required />

        <label>Price ($):</label>
        <input type="number" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <label>Stock Quantity:</label>
        <input type="number" placeholder="Enter stock quantity" value={stock} onChange={(e) => setStock(e.target.value)} required />

        <label>Image URL:</label>
        <input type="text" placeholder="Enter image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />

        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

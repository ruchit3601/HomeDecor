import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [product, setProduct] = useState({ name: "", category: "", price: "", stock: "", imageUrl: "" });

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/products", product)
      .then(() => alert("Product added!"))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

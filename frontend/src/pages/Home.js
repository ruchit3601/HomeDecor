import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar"; // Import updated Navbar
import "./Home.css"; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user")); // Check login status
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []); // Load cart from localStorage

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product._id !== id)); 
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save cart in localStorage
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="home-container">
      {/* Navbar will manage its own login state */}
      <Navbar />

      {/* Show "Add Product" only for logged-in users */}
      {isLoggedIn && <Link to="/add" className="add-btn">➕ Add Product</Link>}

      {/* Products List */}
      <div className="product-container">
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <div className="buttons">
                <Link to={`/view/${product._id}`} className="view-btn">View Details</Link>
                <button onClick={() => handleAddToCart(product)} className="cart-btn">🛒 Add to Cart</button>
                {isLoggedIn && (
                  <>
                    <Link to={`/edit/${product._id}`} className="edit-btn">✏️ Edit</Link>
                    <button onClick={() => handleDelete(product._id)} className="delete-btn">🗑️ Delete</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

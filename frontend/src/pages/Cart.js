import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate for redirection
import "../styles/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleRemove = (productId) => {
    const updatedCart = cart.filter(item => item._id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart); // Update state with new cart data
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item._id === productId) {
        item.quantity += 1;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart); // Update state with new cart data
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item._id === productId && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart); // Update state with new cart data
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Simulate checking if the user is logged in
    const isLoggedIn = localStorage.getItem("user");

    if (isLoggedIn) {
      // If logged in, proceed to checkout
      navigate("/checkout");
    } else {
      // If not logged in, redirect to login page
      navigate("/login");
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((product) => (
            <div key={product._id} className="cart-item">
              <img src={product.imageUrl} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => handleDecreaseQuantity(product._id)}>-</button>
                  <span>Quantity: {product.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(product._id)}>+</button>
                </div>
                <button onClick={() => handleRemove(product._id)} className="remove-btn">🗑️ Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-total">
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button onClick={handleCheckout} className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

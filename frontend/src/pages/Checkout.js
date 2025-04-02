import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p>Order summary and payment details can go here.</p>
      <Link to="/confirmation" className="confirm-btn">Confirm Order</Link>
    </div>
  );
};

export default Checkout;

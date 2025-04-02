import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react"; // Using Lucide React icons

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user info

  useEffect(() => {
    setIsLoggedIn(!!user); // Convert `user` to boolean
  }, [user]); // Run when `user` changes

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    setIsLoggedIn(false);
    window.location.reload(); // Refresh to update Navbar
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {isLoggedIn ? (
          <>
            <li className="welcome-text">Welcome, {user.name ? user.name.split(" ")[0] : "Guest"}</li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login"><User size={20} /></Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css"; // Import CSS for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // Store user session and name
      localStorage.setItem("user", JSON.stringify({ email, name: storedUser.name }));

      navigate("/cart"); // Redirect to cart or home page
      window.location.reload(); // Refresh to update Navbar
    } else {
      setError("Invalid email or password!");
      setTimeout(() => setError(""), 3000); // Clear error after 3 seconds
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <div className="auth-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>}
        <p>Don't have an account? <a href="/register">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;

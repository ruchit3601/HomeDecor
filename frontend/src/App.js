import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/view/:id" element={<ViewProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />


        </Routes>
      </div>
    </Router>
  );
} 

export default App;

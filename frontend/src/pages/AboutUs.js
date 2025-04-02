import React from "react";
import "../styles/AboutUs.css"; // Import CSS file
import Navbar from "../components/Navbar"; // Import the Navbar component


const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <Navbar />
      <header className="hero-section">
        <div className="overlay">
          <h1>INNOVATE CREATIVE DESIGN</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
          <button className="more-info">More Info →</button>
        </div>
      </header>
    </div>
  );
};

export default AboutUs;

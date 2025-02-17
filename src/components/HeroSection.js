import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css"; // Optional: Your custom CSS file for styling

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Expert Health Consultations at Your Fingertips</h1>
        <p className="hero-tagline">Connecting you with top doctors for personalized care, anytime, anywhere.</p>
        <div className="hero-buttons">
          <Link to="/doctor-search" className="btn btn-primary">
            Find a Doctor
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Book an Appointment
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="/Images/board.jpg"
    alt="healthcare"
          className="hero-img"
        />
      </div>
    </div>
  );
}

export default HeroSection;
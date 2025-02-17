
import React from "react";
import  { Link } from "react-router-dom" 
import "./Header.css"; // Optional: Custom styles for the header
const Header = () => {
return (
<header className="header bg-primary text-white py-3">
<div className="container d-flex justify-content-between align-items-center">
{/* Logo */}
<h1 className="logo">HealthCare</h1>
{/* Navigation Menu */}
<nav>
<ul className="nav">
<li className="nav-item">
<Link to="/" className="nav-link">Home</Link>
</li>
<li className="nav-item">
<Link to ="/services" className="nav-link ">Services</Link>
</li>
<li className="nav-item">
<Link to ="/about" className="nav-link">About Us</Link>
</li>
<li className="nav-item">
<Link to="/contact" className="nav-link">
Contact Us
</Link>
</li>
<li className="nav-item">
<Link  to="/LoginSignup" className="nav-link e">Login/Signup</Link>
</li>
</ul>
</nav>
</div>
</header>
);
};
export default Header;
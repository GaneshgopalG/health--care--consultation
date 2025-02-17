
import React from "react";
import "./Footer.css";
function Footer() {
return (
<footer className="footer">
<div className="footer-container">
{/* Contact Information */}
<div className="footer-section">
<h3>Contact Us</h3>
<p>Email: contact@healthcare.com</p>
<p>Phone: +1 (123) 456-7890</p>
<p>Address: 123 Health St, Wellness City,
USA</p>
</div>
{/* Quick Links */}
<div className="footer-section">
<h3>Quick Links</h3>
<ul>
<li><a href="/">Home</a></li>
<li><a href="/services">Services</a></li>
<li><a href="/about">About Us</a></li>
<li><a href="/contact">Contact</a></li>
<li><a href="/booking">BookAppointment</a></li>
</ul>
</div>
{/* Social Media Links */}
<div className="footer-section">
<h3>Follow Us</h3>
<div className="social-icons">
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</div>
</div>
</div>
<div className="footer-bottom">
<p>&copy; {new Date().getFullYear()}
HealthCare Consultations. All rights reserved.</p>
</div>
</footer>
);
}
export default Footer;
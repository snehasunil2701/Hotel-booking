import React from 'react'
import "./Footer.css"
// import image1 from "../assets/home/lexholidayslogo.png"

const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer-container">
        {/* <img src={image1} alt=""/> */}
        <div className="footer-section">
          <h2>Sk Holidays</h2>
          <p>Enjoy your dream vacation with the best hotel deals and services.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div >
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/room">Destinations</a></li>
            <li><a href="/contact">Contact</a></li>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@Skholidays.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Beach Road, Maldives</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
           
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Sk Holidays. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

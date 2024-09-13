import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h1>FoodieWeb</h1>
          <p>
            Explore our offerings, get in touch, and stay updated with our latest news. 
            Find quick access to our social media, menu highlights, and more. 
            We're dedicated to quality and customer satisfaction, making your dining experience exceptional.
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <nav>
            <a href="/">Home</a>
            <a href="/">Dishes</a>
            <a href="/">About</a>
            <a href="/">Menu</a>
            <a href="/">Reviews</a>
          </nav>
        </div>
        <div className="footer-section">
          <h2>Menu Highlights</h2>
          <nav>
            <a href="/">Our Dishes</a>
            <a href="/">Special Offers</a>
          </nav>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <nav>
            <a href="mailto:FoodieWeb@email.com">FoodieWeb@email.com</a>
            <a href="tel:+9743888048">+974 3888048</a>
            <a href="/">Follow Us</a>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} FoodieWeb. Designed by <span>4th Group</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

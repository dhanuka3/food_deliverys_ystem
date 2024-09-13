import React from "react";
import './ContactUs.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.</p>
      </div>

      <div className="contact-info">
        <div className="contact-info-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p>123 Food Street, Matara</p>
        </div>
        <div className="contact-info-item">
          <FaPhoneAlt className="contact-icon" />
          <p>074-3888048</p>
        </div>
        <div className="contact-info-item">
          <FaEnvelope className="contact-icon" />
          <p>contactUs5@homefooddelivery.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

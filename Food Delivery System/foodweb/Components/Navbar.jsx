import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Using ScrollLink for smooth scrolling
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleAdminLoginClick = () => { // Renamed for clarity
    navigate('/adminlogin');
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>HOMEFOOD Delivery</h1>
        </div>

        <div className={`navbar-menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </ScrollLink>
          
          <ScrollLink
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Dishes
          </ScrollLink>

          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            About
          </ScrollLink>

          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </ScrollLink>

          <ScrollLink
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </ScrollLink>
          
          

          <button className="navbar-button" onClick={handleLoginClick}>
            Login
          </button>
          <button className="navbar-button" onClick={handleAdminLoginClick}>
            Admin Only
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

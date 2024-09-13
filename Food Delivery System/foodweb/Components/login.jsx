import React, { useState } from "react";
import './login.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

function Login() {
  const [action, setAction] = useState('login');
  const navigate = useNavigate();

  const toggleForm = (form) => {
    setAction(form);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault(); 
    console.log("Registration successful!");
    setAction('login');
  };

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent form submission default action
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className={`wrapper ${action}`}>
      <div className={`form-box form-box-login ${action === 'register' ? 'hidden' : ''}`}>
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" onClick={handleLoginClick}>
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account? 
              <a href="#" onClick={() => toggleForm('register')}> Register</a>
            </p>
          </div>
        </form>
      </div>

      <div className={`form-box form-box-register ${action === 'login' ? 'hidden' : ''}`}>
        <form onSubmit={handleRegisterSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Phone Number" required />
            <BsFillTelephoneFill className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> I agree to the terms & Conditions
            </label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account? 
              <a href="#" onClick={() => toggleForm('login')}> Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

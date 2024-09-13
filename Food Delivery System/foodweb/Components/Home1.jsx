import React from "react";
import Button from "../layouts/Button";
import { Link } from 'react-router-dom';
import './Home1.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="home-content">
        <h1 className="home-heading animate__animated animate__fadeInLeft">
          Fresh Ingredients, Delicious Meals
        </h1>
        
        <p className="home-paragraph animate__animated animate__fadeInRight">
          Welcome to HomeFood Delivery, where culinary excellence meets the convenience of home dining.
          At HomeFood Delivery, we are passionate about bringing the finest dishes from top chefs straight to your table,
          no matter where you are. Our commitment to quality starts with the freshest ingredients, sourced daily from local farms to ensure that every bite bursts with authentic flavors.
          We offer a diverse menu that caters to every craving, from savory and spicy to sweet and indulgent, allowing you to explore a world of taste without leaving your home.
          Whether you're in the mood for a comforting classic or something new and exciting, our carefully crafted dishes are designed to delight your palate and satisfy your appetite. But we don’t just stop at great food—we pride ourselves on providing a seamless,
          fast, and reliable delivery service, so your meals arrive hot and fresh, ready for you to enjoy. As you explore our website, you'll find special offers, exclusive deals, and customer reviews that speak to our dedication to excellence.
          Join our community of food lovers today,
          and experience the joy of gourmet dining in the comfort of your own home with HomeFood Delivery.
        </p>
        
        <div className="home-button-container animate__animated animate__fadeInUp">
        <Link to="/order">
  <Button title="Order Now" />
</Link>

        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import img from "../assets/1.png";
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <img src={img} alt="Delicious dish" className="about-image" />
      </div>

      <div className="about-content">
        <h1 className="about-heading">Why Choose Us?</h1>
        <p className="about-paragraph">
          "A delightful meal with a great atmosphere. The food exceeded my expectations, and the service was impeccable.
          I especially enjoyed the dessert; it was the perfect end to a wonderful meal. The attention to detail and the passion for food were apparent. I’ll be recommending this spot to friends and family!"
        </p>
        <p className="about-paragraph">
          "I had a fantastic dining experience at this restaurant. The flavors were rich and the portions were generous.
          The waitstaff were professional and made sure we were well taken care of throughout the meal. It's clear that a lot of care goes into the food and service here. Definitely worth a visit!"
        </p>
       
      </div>
    </div>
  );
};

export default About;

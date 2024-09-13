import React from "react";
import dish1 from "../assets/1.png";
import dish2 from "../assets/2.png";
import dish3 from "../assets/3.png";
import dish4 from "../assets/4.png";
import './Dishes.css';

const Dishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Spicy Chicken Wings",
      description: "Juicy chicken wings marinated in a spicy sauce, grilled to perfection.",
      image: dish1,
    },
    {
      id: 2,
      name: "Vegan Salad Bowl",
      description: "A healthy mix of fresh greens, avocado, quinoa, and a tangy dressing.",
      image: dish2,
    },
    {
      id: 3,
      name: "Grilled Salmon",
      description: "Tender salmon fillet grilled with herbs and served with a side of veggies.",
      image: dish3,
    },
    {
      id: 4,
      name: "Pasta Alfredo",
      description: "Classic pasta Alfredo with creamy sauce and a touch of garlic.",
      image: dish4,
    },
  ];

  return (
    <div className="dishes-container">
      <h1 className="dishes-heading">Our Dishes</h1>

      <div className="dishes-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img
              src={dish.image}
              alt={dish.name}
              className="dish-image"
            />
            <div className="dish-content">
              <h2 className="dish-title">{dish.name}</h2>
              <p className="dish-description">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;

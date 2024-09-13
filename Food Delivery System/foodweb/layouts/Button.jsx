import React from "react";

const Button = ({ title }) => {
  return (
    <button
      style={{
        padding: "0.5rem 1.5rem",
        border: "2px solid #ff6347", // brightColor
        color: "#ff6347", // brightColor
        backgroundColor: "transparent",
        borderRadius: "9999px", // rounded-full equivalent
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#ff6347";
        e.target.style.color = "#fff";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "#ff6347";
      }}
    >
      {title}
    </button>
  );
};

export default Button;


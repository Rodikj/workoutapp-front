import React from "react";
import "../styles/Card.css";

interface CardProps {
  image: string;
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;

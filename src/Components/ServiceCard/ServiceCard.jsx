import React from "react";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  return (
    // <div>
      <div className="grid-cards">
        <div className="img-background">
          <img className="grid-card-img" src={props.image} alt="" />
        </div>
        <h1>{props.title}</h1>
        <p>{props.des}</p>
      </div>
    // </div>
  );
};

export default ServiceCard;

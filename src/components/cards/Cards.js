//import React from 'react'
import "./Cards.css";
import { data } from "../../data/data";

const Cards = () => {
  return (
    <div className="card-container">
      {data.map((card, id) => {
        return (
          <div className="cards" key={id}>
            <div className="title">
              <h3>{card.title}</h3>
            </div>

            <img src={card.image} alt={card.title} />
            <div className="card-over">
              <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

// src/components/card/Card.jsx

import React from "react";
import "./Card.css";

export default function Card({ name, age, desc = "No Desc", bg, imgSrc }) {
  return (
    <div className="card" style={{ background: bg }}>
      <img src={imgSrc} alt={`${name}'s image`} width={150} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <p>{desc}</p>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

export default function Event({ event }) {
  const { name, plug, images, price } = event;

  return (
    <article className="event">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single event" />
      </div>
    </article>
  );
}

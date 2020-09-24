import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Event({ event }) {
  const { name, slug, images, price } = event;

  return (
    <article className="event">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single event" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per person</p>
        </div>
        <Link to={`/events/${slug}`} className="btn-primary event-link">
          More Info
        </Link>
      </div>
      <p className="event-info">{name}</p>
    </article>
  );
}

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  })
}
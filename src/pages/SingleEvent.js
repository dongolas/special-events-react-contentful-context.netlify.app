import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { EventContext } from "../context";
import { StyledHero } from "../components/StyledHero";

export default class SingleEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = EventContext;
  render() {
    const { getEvent } = this.context;
    const event = getEvent(this.state.slug);
    if (!event) {
      return (
        <div className="error">
          <h3>No such event could be found!</h3>
          <Link to="/events" className="btn-primary">
            Return to Events
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = event;
    const [main, ...defaultImages] = images;

    return (
      <>
        <StyledHero img={main || this.state.defaultBcg}>
          <Banner title={`${name} event`}>
            <Link to="/events" className="btn-primary">
              Back to Events
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-event">
          <div className="single-event-images">
            {defaultImages.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-event-info">
          <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>            
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: ${size} SQFT</h6>
              <h6>max Capacity: {capacity > 1 ?`${capacity} people`:`${capacity} person`} </h6>
              <h6>{pets?"pets allowed": "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="event-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>

        </section>
      </>
    );
  }
}

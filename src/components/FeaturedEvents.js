import React, { Component } from "react";
import { EventContext } from "../context";
import Loading from "./Loading";
import Event from "./Event";
import Title from "./Title";

export default class FeaturedEvents extends Component {
  static contextType = EventContext;
  render() {
    let { loading, featuredEvents: events } = this.context;
    events = events.map((event) => {
      return <Event key={event.id} event={event} />;
    });

    return (
      <section className="featured-events">
        <Title title="Featured Events" />
        <div className="featured-events-center">
          {loading ? <Loading /> : events}
        </div>
      </section>
    );
  }
}

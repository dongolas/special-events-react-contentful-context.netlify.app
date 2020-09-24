import React from "react";
import Event from "./Event";

export default function EventsList({ events }) {
  if (events.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately there are not events fo these criteria!</h3>
      </div>
    );
  }
  return (
    <section className="eventslist">
      <div className="eventslist-center">
        {events.map((item) => {
          return <Event key={item.id} event={item} />;
        })}
      </div>
    </section>
  );
}

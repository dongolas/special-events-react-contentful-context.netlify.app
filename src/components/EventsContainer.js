import React from "react";
import EventsFilter from "./EventsFilter";
import EventsList from "./EventsList";
import { withEventConsumer } from "../context";
import Loading from "./Loading";

function EventsContainer({ context }) {
  const { loading, sortedEvents, events } = context;
  console.log(context);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      Hello from EventContainer
      <EventsFilter events={events} />
      <EventsList events={sortedEvents} />
    </>
  );
}

export default withEventConsumer(EventsContainer);

/* import React from "react";
import EventsFilter from "./EventsFilter";
import EventsList from "./EventsList";
import { EventConsumer } from "../context";
import Loading from "./Loading";

export default function EventsContainer() {
  return (
    <>
      <EventConsumer>
        {(value) => {
          console.log(value);
          const { loading, events, sortedEvents } = value;
          if (loading) {
            return <Loading />;
          }
          return (
            <div>
              Hello from EventContainer
              <EventsFilter rooms={events} />
              <EventsList rooms={sortedEvents} />
            </div>
          );
        }}
      </EventConsumer>
    </>
  );
}
 */

import React, { Component } from "react";
import items from "./data";

const EventContext = React.createContext();
// <EventContext.Provider value={'hello'}

class EventProvider extends Component {
  state = {
    events: [],
    sortedEvents: [],
    featuredEvents: [],
    loading: true,
  };
  // getData

  componentDidMount() {
    let events = this.formatData(items);
    let featuredEvents = events.filter((event) => event.featured === true);
    this.setState({
      events,
      featuredEvents,
      sortedEvents: events,
      loading: false,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let event = { ...item.fields, images, id };
      return event;
    });
    return tempItems;
  }

  render() {
    return (
      <EventContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </EventContext.Provider>
    );
  }
}

const EventConsumer = EventContext.Consumer;

export { EventProvider, EventConsumer, EventContext };

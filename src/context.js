import React, { Component } from "react";
import items from "./data";

const EventContext = React.createContext();

class EventProvider extends Component {
  state = {
    events: [],
    sortedEvents: [],
    featuredEvents: [],
    loading: false,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    let events = this.formatData(items);
    let featuredEvents = events.filter((event) => event.featured === true);
    let maxPrice = Math.max(
      ...events.map((item) => {
        return item.price;
      })
    );
    let maxSize = Math.max(
      ...events.map((item) => {
        return item.size;
      })
    );
    this.setState({
      events,
      featuredEvents,
      sortedEvents: events,
      loading: false,
      price:maxPrice,
      maxPrice,
      maxSize
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

  getEvent = (slug) => {
    let tempEvents = [...this.state.events];
    const event = tempEvents.find((event) => event.slug === slug);
    return event;
  };

  handleChange = event => {
    const type = event.target.type
    const name = event.target.name
    const value = event.target.value
    console.log(type,name,value);
  }

  filterEvents = ()=>{
    console.log('hello')
  }

  render() {
    return (
      <EventContext.Provider value={{ ...this.state, getEvent: this.getEvent, handleChange: this.handleChange }}>
        {this.props.children}
      </EventContext.Provider>
    );
  }
}

const EventConsumer = EventContext.Consumer;

export function withEventConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <EventConsumer>
        {(value) => <Component {...props} context={value} />}
      </EventConsumer>
    );
  };
}

export { EventProvider, EventConsumer, EventContext };

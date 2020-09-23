import React, { Component } from "react";
import Title from "./Title";
import {
  GiMusicalKeyboard,
  GiMusicalScore,
  GiMusicSpell,
} from "react-icons/gi";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <GiMusicalKeyboard />,
        title: "free cocktails",
        info: "All you want is freedom dude. come on. do it!",
      },
      {
        icon: <GiMusicSpell />,
        title: "free music",
        info: "All you want is freedom dude. come on. do it!",
      },
      {
        icon: <GiMusicalScore />,
        title: "free galleries",
        info: "All you want is freedom dude. come on. do it!",
      },
      {
        icon: <GiMusicalScore />,
        title: "free cocktails",
        info: "All you want is freedom dude. come on. do it!",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return(
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>);
          })}
        </div>
      </section>
    );
  }
}

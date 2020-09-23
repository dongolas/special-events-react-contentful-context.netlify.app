import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <Hero hero="eventsHero">
      <Banner title="Our Events">
        <Link to="/" className="btn-primary">Return Home</Link>
      </Banner>
    </Hero>
  );
}

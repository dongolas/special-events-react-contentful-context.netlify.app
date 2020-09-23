import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedEvents from "../components/FeaturedEvents";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Events from the future!" subtitle="Events">
          <Link to="/Events" className="btn-primary">
            See all the Events!
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedEvents />
    </>
  );
}

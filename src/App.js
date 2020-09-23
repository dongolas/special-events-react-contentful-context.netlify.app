import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Events from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:slug" component={SingleEvent} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

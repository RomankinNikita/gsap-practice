import React from "react";
import Logo from "./components/Logo";
import Circles from "./components/Circles";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Reveal from "./components/Reveal/Reveal";
import Landing from "./components/Landing/Landing";
import Ball from "./components/Ball/Ball";
import ScrollMagic from "./components/ScrollMagic/ScrollMagic";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/logo">
          <Logo />
        </Route>
        <Route path="/circles">
          <Circles />
        </Route>
        <Route path="/reveal">
          <Reveal />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
        <Route path="/ball">
          <Ball />
        </Route>
        <Route path="/scrollmagic">
          <ScrollMagic />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

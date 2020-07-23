import React from "react";
import "./ScrollMagic.scss";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Sticky from "./Sticky/Sticky";
import Sticky2 from "./Sticky2/Sticky2";
import ClassToggle from "./ClassToggle/ClassToggle";
import SectionWipes from "./SectionWipes/SectionWipes";

const ScrollMagic = () => {
  return (
    <div className="scrollmagic">
      <nav className="nav">
        <NavLink to="/scrollmagic/sticky">Sticky</NavLink>
        <NavLink to="/scrollmagic/sticky2">Sticky2</NavLink>
        <NavLink to="/scrollmagic/class-toggle">ClassToggle</NavLink>
        <NavLink to="/scrollmagic/SectionWipes">SectionWipes</NavLink>
      </nav>

      <Switch>
        <Route path="/scrollmagic/sticky">
          <Sticky />
        </Route>
        <Route path="/scrollmagic/sticky2">
          <Sticky2 />
        </Route>
        <Route path="/scrollmagic/class-toggle">
          <ClassToggle />
        </Route>
        <Route path="/scrollmagic/SectionWipes">
          <SectionWipes />
        </Route>
        <Redirect to="/scrollmagic/sticky" />
      </Switch>
    </div>
  );
};

export default ScrollMagic;

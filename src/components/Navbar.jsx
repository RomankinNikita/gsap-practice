import React from "react";
import { Link } from "react-router-dom";

const links = ["logo", "circles", "reveal", "landing", "ball", "scrollmagic"];

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        GSAP
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {links.map(link => (
            <li className="nav-item" key={link}>
              <Link
                className="nav-link"
                style={{ textTransform: "capitalize" }}
                to={`/${link}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

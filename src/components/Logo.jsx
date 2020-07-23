import React, { useRef, useEffect } from "react";
import logo from "../logo.svg";
import { TweenLite, Power3 } from "gsap";

const Logo = () => {
  let logoRef = useRef(null);
  let textRef = useRef(null);
  let linkRef = useRef(null);

  useEffect(() => {
    TweenLite.to(logoRef, 1, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 1
    });

    TweenLite.to(textRef, 1, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 1.25
    });

    TweenLite.to(linkRef, 1, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 1.75
    });
  }, []);

  return (
    <header className="App-header">
      <img
        ref={el => (logoRef = el)}
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <p className="App-text" ref={el => (textRef = el)}>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        ref={el => (linkRef = el)}
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Logo;

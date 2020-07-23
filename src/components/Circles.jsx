import React, { useEffect, useRef, useState, useCallback } from "react";
import { TweenLite, Power3 } from "gsap";

const Circles = () => {
  const [state, setState] = useState({
    yellow: false,
    red: false,
    blue: false
  });

  let yellow = useRef(null);
  let red = useRef(null);
  let blue = useRef(null);

  useEffect(() => {
    // TweenLite.from(yellow, 0.8, {
    //   opacity: 1,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.2
    // });

    // TweenLite.from(red, 0.8, {
    //   opacity: 1,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.4
    // });

    // TweenLite.from(blue, 0.8, {
    //   opacity: 1,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.6
    // });
    //OR:
    TweenLite.staggerFrom(
      [yellow, red, blue],
      0.8,
      {
        opacity: 0,
        x: 40,
        ease: Power3.easeOut,
        delay: 0.2
      },
      0.2
    );
  }, []);

  const handleResize = useCallback(
    name => () => {
      setState(prev => {
        if (state[name]) {
          TweenLite.to(yellow, 0.8, {
            width: 75,
            height: 75,
            ease: Power3.easeOut
          });
        } else {
          TweenLite.to(yellow, 0.8, {
            width: 200,
            height: 200,
            ease: Power3.easeOut
          });
        }
        return {
          ...prev,
          [name]: !prev[name]
        };
      });
    },
    [state]
  );

  return (
    <div className="circle-container">
      <div
        onClick={handleResize("yellow")}
        ref={el => (yellow = el)}
        className="circle"
      ></div>
      <div
        onClick={handleResize("red")}
        ref={el => (red = el)}
        className="circle red"
      ></div>
      <div
        onClick={handleResize("blue")}
        ref={el => (blue = el)}
        className="circle blue"
      ></div>
    </div>
  );
};

export default Circles;

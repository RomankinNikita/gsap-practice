import React from "react";
import "./Ball.scss";
import { Tween, Timeline } from "react-gsap";

const Ball = () => {
  return (
    <div className="ball-container">
      <Timeline repeat={-1} target={<div className="ball"></div>}>
        <Tween
          duration={1.5}
          to={{ x: 400, scale: 2 }}
          ease="Bounce.easeOut"
          position="start"
        />
        <Tween duration={1.5} to={{ x: 0, scale: 1 }} ease="Back.inOut(3)" />
        <Tween
          duration={1.5}
          to={{ x: -400, scale: 2 }}
          ease="Bounce.easeOut"
        />
        <Tween duration={1.5} to={{ x: 0, scale: 1 }} ease="Back.inOut(3)" />
      </Timeline>

      <Timeline>
        <Tween
          duration={1}
          from={{ y: 200 }}
          ease="Power1.easeOut"
          position="start+=0.5"
        >
          <div className="text">TEXT1</div>
        </Tween>
        <Tween
          duration={1}
          from={{ y: 200 }}
          position={0.8}
          ease="Power1.easeOut"
        >
          <div className="text">TEXT2</div>
        </Tween>
      </Timeline>
    </div>
  );
};

export default Ball;

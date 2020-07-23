import React from "react";
import "./SectionWipes.scss";
import { Controller, Scene } from "react-scrollmagic";

const SectionWipes = () => {
  return (
    <div className="section-wipes">
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene pin indicators={true}>
          <div className="panel blue">
            <span>Panel</span>
          </div>
        </Scene>
        <Scene pin indicators={true}>
          <div className="panel turqoise">
            <span>Panel</span>
          </div>
        </Scene>
        <Scene pin indicators={true}>
          <div className="panel green">
            <span>Panel</span>
          </div>
        </Scene>
        <Scene pin indicators={true}>
          <div className="panel bordeaux">
            <span>Panel</span>
          </div>
        </Scene>
      </Controller>
    </div>
  );
};

export default SectionWipes;

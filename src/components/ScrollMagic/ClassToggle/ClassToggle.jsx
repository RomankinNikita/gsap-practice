import React from "react";
import "./ClassToggle.scss";
import { Controller, Scene } from "react-scrollmagic";

const ClassToggle = () => {
  return (
    <div className="class-toggle">
      <div className="section" />
      <div id="trigger" />
      <Controller>
        <Scene
          duration={200}
          classToggle="zap"
          triggerElement="#trigger"
          indicators={true}
        >
          {(progress, event) => (
            <div className="test">
              Pin Test {event.type} {progress}
            </div>
          )}
        </Scene>
        <Scene
          classToggle={[".test", "yellow"]}
          reverse={false}
          indicators={true}
        >
          <div>Toggle other class</div>
        </Scene>
      </Controller>
      <div className="section" />
    </div>
  );
};

export default ClassToggle;

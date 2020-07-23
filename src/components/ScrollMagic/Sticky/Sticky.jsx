import React from "react";
import "./Sticky.scss";
import { Controller, Scene } from "react-scrollmagic";

const Sticky = () => {
  return (
    <>
      <div className="section" />
      <Controller>
        <Scene
          triggerHook={0.5}
          offset={200}
          duration={500}
          pin={{ pushFollowers: false }}
        >
          <div className="sticky">
            <div>Pin Test</div>
          </div>
        </Scene>
        <Scene duration={200} pin={{ pushFollowers: false }}>
          <div className="sticky green">
            <div>Pin Test</div>
          </div>
        </Scene>
        <Scene duration={600} pin={{ pushFollowers: false }}>
          <div className="sticky blue">
            <div>Pin Test</div>
          </div>
        </Scene>
      </Controller>
      <div className="section" />
    </>
  );
};

export default Sticky;

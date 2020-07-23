import React, { useRef, useEffect } from "react";
import "./Reveal.css";
import image from "../../assets/glacier-4827387_1280.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const Reveal = () => {
  let box = useRef(null);
  let img = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-box:after");

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(box, 0.5, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, {
        width: "0%",
        ease: Power2.easeInOut
      })
      .from(img, 1.4, { scale: 2, ease: Power2.easeInOut, delay: -1.4 });

    return () => {
      tl.to(imageReveal, 0, { width: "100%" });
    };
  }, []);

  return (
    <div className="img-box" ref={el => (box = el)}>
      <img src={image} alt="mountains" className="img" ref={el => (img = el)} />
    </div>
  );
};

export default Reveal;

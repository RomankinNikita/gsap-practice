import React, { useRef, useEffect } from "react";
import "./Landing.scss";
import { ReactComponent as Arrow } from "../../assets/landing/next.svg";
import girl from "../../assets/landing/woman.jpg";
import boy from "../../assets/landing/man.jpg";
import { TimelineLite, TweenLite, Power3 } from "gsap";
import { Timeline } from "gsap/gsap-core";

const Landing = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // image vars
    const girlImageBox = images.firstElementChild;
    const girlImage = girlImageBox.firstElementChild;
    const boyImageBox = images.lastElementChild;
    const boyImage = boyImageBox.lastElementChild;
    // content vars
    const firstLine = content.children[0].children[0];
    const secondLine = firstLine.nextSibling;
    const thirdLine = secondLine.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // Remove init flash
    TweenLite.to(app, 0, { css: { visibility: "visible" } });

    // Images Animation
    tl.from(
      girlImageBox,
      1.8,
      {
        y: 1280,
        ease: Power3.easeOut
      },
      "start"
    )
      .from(girlImage, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
      .from(
        boyImageBox,
        1.8,
        {
          y: 1280,
          ease: Power3.easeOut
        },
        0.2
      )
      .from(boyImage, 2, { scale: 1.6, ease: Power3.easeOut }, 0.4);

    // Content Animation
    tl.staggerFrom(
      [firstLine.children[0], secondLine.children[0], thirdLine.children[0]],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 1.2
      },
      0.15,
      "start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.8);
  }, [tl]);

  return (
    <div className="hero" ref={el => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of diseased caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda vero asperiores fuga molestias doloremque quidem.
                Maxime mollitia accusantium fugit veritatis?
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  explore
                  <div className="arrow-icon">
                    <Arrow className="arrow-icon-svg" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => (images = el)}>
              <div className="hero-image girl">
                <img src={girl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={boy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

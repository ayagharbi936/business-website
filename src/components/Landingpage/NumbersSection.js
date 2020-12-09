import React, { useState } from "react";
import icon1 from "../../images/calendar.png";
import icon2 from "../../images/box.png";
import icon3 from "../../images/customer.png";
import { Spring, config } from "react-spring/renderprops";
import { InView } from "react-intersection-observer";

const NumbersSection = () => {
  const [start, setStart] = useState(false);
  const onInViewChange = (inview) => {
    if (!start && inview) setStart(true);
  };
  return (
    <div className="numbers">
      <div className="overlay-container">
        <div className="section-title" style={{ paddingTop: 70 }}>
          <p style={{ color: "#fff" }}>Our Numbers</p>
          <hr className="line" />
        </div>
        <InView tag="div" onChange={onInViewChange}>
          <div className="numbers-container">
            <div className="number-item">
              <div className="number">
                <img alt="" className="icon" src={icon1} />
                <Spring
                  to={{ number: start ? 20 : 1 }}
                  delay="300"
                  config={config.molasses}
                >
                  {(props) => <p>{props.number.toFixed()}+</p>}
                </Spring>
              </div>
              <p className="title">Years In Business</p>
            </div>
            <div className="number-item">
              <div className="number">
                <img alt="" className="icon" src={icon2} />
                <Spring
                  to={{ number: start ? 200 : 1 }}
                  delay="300"
                  config={config.molasses}
                >
                  {(props) => <p>{props.number.toFixed()}+</p>}
                </Spring>
              </div>
              <p className="title">Projects</p>
            </div>
            <div className="number-item">
              <div className="number">
                <img alt="" className="icon" src={icon3} />
                <Spring
                  to={{ number: start ? 100 : 1 }}
                  delay="300"
                  config={config.molasses}
                >
                  {(props) => <p>{props.number.toFixed()}+</p>}
                </Spring>
              </div>
              <p className="title">Clients</p>
            </div>
          </div>
        </InView>
      </div>
    </div>
  );
};

export default NumbersSection;

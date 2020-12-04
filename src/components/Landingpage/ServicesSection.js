import React from "react";
import icon1 from "../../images/lightbulb.png";
import icon2 from "../../images/save-money.png";
import icon3 from "../../images/settings.png";
import icon4 from "../../images/deal.png";
import icon5 from "../../images/bar-chart.png";
import icon6 from "../../images/darts.png";

const ServicesSection = () => {
  return (
    <div className="section" id="services">
      <div className="section-title">
        <p>Our Services</p>
        <hr className="line" />
      </div>
      <div className="services-container">
        <div class="service-item">
          <img alt="" src={icon1} className="icon" />
          <p className="title">Lorem Ipsum</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus commodo.
          </p>
        </div>
        <div class="service-item">
          <img alt="" src={icon2} className="icon" />
          <p className="title">Lorem Ipsum</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus commodo.
          </p>
        </div>
        <div class="service-item">
          <img alt="" src={icon3} className="icon" />
          <p className="title">Lorem Ipsum</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus commodo.
          </p>
        </div>
        <div class="service-item">
          <img alt="" src={icon4} className="icon" />
          <p className="title">Lorem Ipsum</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus commodo.
          </p>
        </div>
        <div class="service-item">
          <img alt="" src={icon5} className="icon" />
          <p className="title">Lorem Ipsum</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus commodo.
          </p>
        </div>
        <div class="service-item">
          <img alt="" src={icon6} className="icon" />
          <p className="title">Lorem Ipsum</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus commodo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

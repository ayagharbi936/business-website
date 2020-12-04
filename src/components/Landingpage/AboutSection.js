import React from "react";
import image from "../../images/about.jpg";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <div className="section">
      <div className="section-title">
        <p>Why Choose Us</p>
        <hr className="line" />
      </div>
      <div className="about-container">
        <img className="about-img" src={image} alt="" />
        <div className="about-main">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            accumsan, erat sed dapibus pretium, nunc ant e rutrum lacus, quis
            bibendum est risus in est. In hacha bitasse platea dictumst. Nam
            laoreet ligula at males uadaba sceleri sque Lorem ipsum dolor sit
            amet, onsec tur adi p iscing elit Vivamus. Lorem ipsum dolor sit
            ame co nsectetur adipiscing elit. Vivamus accumsan, erat sedd a
            pibus pretium, nunc ante rutru. amet, onsec tur adi p iscing elit
            Vivamus. Lorem ipsum dolor sit ame co nsectetur adipiscing elit
            Vivamusac c umsan, erat sed d a pibus pretium, nunc ante rutru. amet,
            onsec tur adi p iscing elit Vivamus .Lorem ipsum dolor sit ame co
            nsectetur adipiscing elitf. Vivamus accumsan, erat sed d a pibus
            pretium, nunc ante rutru.
          </p>
          <Link to='/about'><button>Learn more</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

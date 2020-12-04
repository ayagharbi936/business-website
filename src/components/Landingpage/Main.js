import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <main className="hero">
      <div className="overlay-container">
        <div className="hero-container">
          <div>
            <section className="hero-text">
              <p className="hero-title">Triangle</p>
              <p className="hero-subtitle">
                For Brighter Future And More Efficiency
              </p>
            </section>
            <section className="hero-btn">
            <Link to='/contact'><button className="btn-contact">Contact us</button></Link>
            <Link to='/about'><button className="btn-learnMore">Learn more</button></Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

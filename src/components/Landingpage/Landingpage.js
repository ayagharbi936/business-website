import React from "react";
import AboutSection from "./AboutSection";
import Main from "./Main";
import NumbersSection from "./NumbersSection";
import ServicesSection from "./ServicesSection";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";

const Landingpage = () => {
  return (
    <div>
    <Navbar/>
      <Main />
      <AboutSection />
      <ServicesSection/>
      <NumbersSection />
      <Testimonials />
    </div>
  );
};

export default Landingpage;

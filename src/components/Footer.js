import React from "react";
import { Link } from "react-router-dom";
import { HashLink as HLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo"> <p>Triangle</p> </div>
        <ul className=" footer-nav-links">
        <Link style={{textDecoration:'none'}} className="footer-nav-link" to='/'><li>Home</li></Link>
        <Link style={{textDecoration:'none'}} className="footer-nav-link" to='/about'><li >About</li></Link>
        <HLink style={{textDecoration:'none'}} className="footer-nav-link" to='/#services'><li >Services</li></HLink>
        <Link style={{textDecoration:'none'}}className="footer-nav-link" to='/contact'><li >Contact</li></Link>
        </ul>

        <div className="social-container">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>

      <p className="copyrights">copyrights 2020</p>
    </div>
  );
};

export default Footer;

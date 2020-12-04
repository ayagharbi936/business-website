import React, { useState } from "react";
import logo from "../../images/logo1.png";
import { Link } from "react-router-dom";
import { HashLink as HLink } from 'react-router-hash-link';
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
          <p> Triangle </p>
        </div>
        <nav>
          <div className="menu-icon" onClick={() => setClicked(!clicked)}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={clicked ? "nav-links active" : " nav-links"}>
            <Link style={{textDecoration:'none'}} className="nav-link" to='/'><li >Home</li></Link>
            <Link style={{textDecoration:'none'}} className="nav-link" to='/about'><li >About</li></Link>
            <HLink style={{textDecoration:'none'}} className="nav-link" to='/#services'><li>Services</li></HLink>
            <Link style={{textDecoration:'none'}} className="nav-link" to='/contact'><li >Contact</li></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

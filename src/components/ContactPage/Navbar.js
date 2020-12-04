import React, { useState } from "react";
import logo from "../../images/logo2.png";
import { Link } from "react-router-dom";
import { HashLink as HLink } from 'react-router-hash-link';
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="navbar" style={{backgroundColor:'#2a88b0'}}>
      <div className="navbar-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
          <p style={{ color:'white'}}> Triangle </p>
        </div>
        <nav>
          <div style={{ color:'white'}} className="menu-icon" onClick={() => setClicked(!clicked)}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul style={{backgroundColor:'#2a88b0'}} className={clicked ? "nav-links active" : " nav-links"}>
            <Link style={{textDecoration:'none'}} to="/" className="nav-link"><li style={{ color:'white'}} >Home</li></Link>
            <Link style={{textDecoration:'none'}} to="/about" className="nav-link"><li style={{ color:'white'}} >About</li></Link>
            <HLink style={{textDecoration:'none'}} className="nav-link" to='/#services'><li style={{ color:'white'}}>Services</li></HLink>
            <Link style={{textDecoration:'none'}} to="/contact" className="nav-link"><li style={{ color:'white'}} >Contact</li></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

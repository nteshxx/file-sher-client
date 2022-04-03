import React, { useState } from "react";
import "../styles/navbar.css";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(hamburger)

  const handleClick = () => {
    icon === hamburger ? setIcon(cross) : setIcon(hamburger);
    setShow(!show);
  }

  return (
    <div id="main-nav">
      <button id="hamburgerbtn" onClick={handleClick}>
        <img src={icon} alt="" />
      </button>
      {show && <MobileNavBar/>}
      <div id="navbar">
        <nav id="nav">
          <div id="logo">
            <img src={logo} alt="" />
            <Link className="logo-text" to="/">File Sher</Link>
          </div>
          <div id="navigation">
            <Link className="navlinks" to="/upload">Upload</Link>
            <Link className="navlinks" to="/download">Download</Link>
            <Link className="navlinks" to="/faqs">FAQs</Link>
            <Link className="navlinks" to="/about">About Us</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

const MobileNavBar = () => {
  return (
    <div id="mobile-navbar">
      <ul>
        <Link className="navlinks" to="/upload">Upload</Link>
        <Link className="navlinks" to="/download">Download</Link>
        <Link className="navlinks" to="/faqs">FAQs</Link>
        <Link className="navlinks" to="/about">About Us</Link>
      </ul>
    </div>
  );
};

export default React.memo(Navbar);

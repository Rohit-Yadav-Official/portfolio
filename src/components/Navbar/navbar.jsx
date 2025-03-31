import React from "react";
import rohit from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navBar">
      <img src={rohit} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link to="intro" className="desktopMenuListItem" smooth={true} duration={500}>Home</Link>
        <Link to="projects" className="desktopMenuListItem" smooth={true} duration={500}>Projects</Link>
        <Link to="dsa" className="desktopMenuListItem" smooth={true} duration={500}>DSA</Link>
      </div>
      <button className="contactButton">
        <img src={contact} alt="contact" className="contactNavBar" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
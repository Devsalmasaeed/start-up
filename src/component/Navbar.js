import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logos from "../assets/logos.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logos} alt="Logo" className="navbar-logo" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="menu-item" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/portfolio" className="menu-item" onClick={() => setIsOpen(false)}>
          Portfolio
        </Link>
        <Link to="/services" className="menu-item" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link to="/contact" className="menu-item" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

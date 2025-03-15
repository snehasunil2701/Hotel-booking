import "./Navbar.css";
import lexlogo from "../assets/home/sk.png";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <img src={lexlogo} alt="Lex Holidays Logo" className="logo" />
          <li><Link to="/room">Room</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBed, FaEnvelope } from "react-icons/fa";
import "./Sidebar.css"; // Add styles for the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FaHome className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle className="icon" />
            About
          </Link>
        </li>
        <li>
          <Link to="/room">
            <FaBed className="icon" />
            Rooms
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope className="icon" />
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

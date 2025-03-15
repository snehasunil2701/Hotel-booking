import React, { useState } from "react";
import { FaUsers, FaCalendarCheck, FaSignOutAlt } from "react-icons/fa";
import BookingPage from "../Booking/Booking"; 
import "./Maindashboard.css";

const Maindashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("Manage Users");

  return (
    <div className="dashboard-container-admin">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Admin Panel</h2>
        <ul>
          <li
            className={selectedMenu === "Manage Users" ? "active" : ""}
            onClick={() => setSelectedMenu("Manage Users")}
          >
            <FaUsers className="icon" />
            Manage Users
          </li>
          <li
            className={selectedMenu === "Booking Slot" ? "active" : ""}
            onClick={() => setSelectedMenu("Booking Slot")}
          >
            <FaCalendarCheck className="icon" />
            Booking Slot
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header className="header">
          <h2>{selectedMenu}</h2>
          <button className="logout-button">
            <FaSignOutAlt className="icon" /> Logout
          </button>
        </header>

        <section className="content-box">
          {selectedMenu === "Manage Users" && (
            <div className="user-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <select>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <button className="add-button">Add User</button>
            </div>
          )}

          {selectedMenu === "Booking Slot" && <BookingPage />}
        </section>
      </main>
    </div>
  );
};

export default Maindashboard;

import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"; // Ensure API URL is set
      console.log("API URL:", API_URL); // Debugging

      const res = await axios.post(`${API_URL}/admin/login`, { email, password }, { withCredentials: true });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/maindashboard");
      } else {
        alert("Invalid login response.");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

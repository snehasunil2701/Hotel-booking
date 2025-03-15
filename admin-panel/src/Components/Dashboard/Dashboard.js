import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // ✅ Added password state
  const [role, setRole] = useState("User");

  // ✅ Fetch users from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  // ✅ Handle user creation
  const createUser = () => {
    axios.post("http://localhost:5000/api/users", { name, email, password, role }) // ✅ Send password
      .then(response => {
        setUsers([...users, response.data.user]); // Add new user to list
        setName("");
        setEmail("");
        setPassword(""); // ✅ Reset password field
        setRole("User");
      })
      .catch(error => console.error("Error creating user:", error));
  };

  // ✅ Handle user deletion
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`)
      .then(() => setUsers(users.filter(user => user._id !== id)))
      .catch(error => console.error("Error deleting user:", error));
  };

  return (
    <div className="dashboard-container">
      <h2>Manage Users</h2>
      
      {/* Form to Add User */}
      <div className="user-form">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> {/* ✅ New password field */}
        
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button onClick={createUser}>Add User</button>
      </div>

      {/* User List */}
      <ul className="user-list">
        {users.map(user => (
          <li key={user._id}>
            {user.name} ({user.role}) 
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

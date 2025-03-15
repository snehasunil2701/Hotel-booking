import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Change to your backend URL

export const getBookings = async () => {
  return axios.get(`${API_URL}/bookings`);
};

export const loginAdmin = async (credentials) => {
  return axios.post(`${API_URL}/admin/login`, credentials);
};

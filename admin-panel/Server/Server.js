require("dotenv").config({ path: "./.env.local" }); // Load .env.local explicitly
const bcrypt = require("bcryptjs");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// ✅ MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is missing. Check your .env.local file!");
  process.exit(1);
}

const connectDB = async () => {
  try {
    console.log("🔄 Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};
connectDB();

// ✅ CORS Fix
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// ✅ User Schema & Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  role: { type: String, enum: ["Admin", "User"], required: true },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

// ✅ Room Schema & Model
const roomSchema = new mongoose.Schema({
  number: { type: String, unique: true, required: true }, // Room number
  type: { type: String, required: true }, // Single, Double, Suite
});

const Room = mongoose.model("Room", roomSchema);

// ✅ Booking Schema & Model
const bookingSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true },
  date: { type: String, required: true }, // Format: YYYY-MM-DD
});

const Booking = mongoose.model("Booking", bookingSchema);

// ✅ Admin Login
app.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id, role: user.role }, "secretkey", { expiresIn: "1h" });
    res.json({ token, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ✅ Create User with Password Hashing
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
});

// ✅ Fetch Users (excluding password for security)
app.get("/api/users", async (req, res) => {
  const users = await User.find().select("-password"); 
  res.json(users);
});

// ✅ Delete User
app.delete("/api/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

// ✅ Add New Room (Admin)
app.post("/api/rooms", async (req, res) => {
  try {
    const { number, type } = req.body;
    if (!number || !type) {
      return res.status(400).json({ message: "Room number and type are required" });
    }

    const room = new Room({ number, type });
    await room.save();
    res.status(201).json({ message: "Room added successfully", room });
  } catch (error) {
    res.status(500).json({ message: "Error adding room", error: error.message });
  }
});

// ✅ Fetch All Rooms
app.get("/api/rooms", async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// ✅ Book a Room (Admin)
app.post("/api/bookings", async (req, res) => {
  try {
    const { roomNumber, date } = req.body;
    if (!roomNumber || !date) {
      return res.status(400).json({ message: "Room number and date are required" });
    }

    // Check if the room is already booked on that date
    const existingBooking = await Booking.findOne({ roomNumber, date });
    if (existingBooking) {
      return res.status(400).json({ message: "Room already booked for this date" });
    }

    const booking = new Booking({ roomNumber, date });
    await booking.save();
    res.status(201).json({ message: "Room booked successfully", booking });
  } catch (error) {
    res.status(500).json({ message: "Error booking room", error: error.message });
  }
});

// ✅ Get Available Rooms by Date
app.get("/api/available-rooms", async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    // Find booked room numbers for the selected date
    const bookedRooms = await Booking.find({ date }).select("roomNumber");
    const bookedRoomNumbers = bookedRooms.map(room => room.roomNumber);

    // Find available rooms
    const availableRooms = await Room.find({ number: { $nin: bookedRoomNumbers } });
    res.json({ date, availableRooms });
  } catch (error) {
    res.status(500).json({ message: "Error fetching available rooms", error: error.message });
  }
});

// ✅ Delete a Booking
app.delete("/api/bookings/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking", error: error.message });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));

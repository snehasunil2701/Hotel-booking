import { useState, useEffect } from "react";

export default function BookingPage() {
  const [date, setDate] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (date) {
      fetchAvailableRooms(date);
    }
  }, [date]);

  const fetchAvailableRooms = async (selectedDate) => {
    try {
      const res = await fetch(`http://localhost:5000/api/available-rooms?date=${selectedDate}`);
      const data = await res.json();
      setAvailableRooms(data.availableRooms);
    } catch (error) {
      console.error("Error fetching available rooms:", error);
    }
  };

  const handleBooking = async () => {
    if (!date || !selectedRoom) {
      setMessage("Please select a date and room.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomNumber: selectedRoom, date }),
      });

      const data = await res.json();
      setMessage(data.message);
      if (res.ok) {
        fetchAvailableRooms(date); // Refresh available rooms
        setSelectedRoom(null);
      }
    } catch (error) {
      console.error("Error booking room:", error);
      setMessage("Failed to book the room.");
    }
  };

  return (
    <div className="booking-container">
      <h2>Hotel Booking</h2>

      <label>Select Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label>Available Rooms:</label>
      <div className="room-slots">
        {availableRooms.length > 0 ? (
          availableRooms.map((room) => (
            <button
              key={room.number}
              className={`room-slot ${selectedRoom === room.number ? "selected" : ""}`}
              onClick={() => setSelectedRoom(room.number)}
            >
              Room {room.number}
            </button>
          ))
        ) : (
          <p>No available rooms for the selected date.</p>
        )}
      </div>

      <button onClick={handleBooking} disabled={!selectedRoom}>Book Room</button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

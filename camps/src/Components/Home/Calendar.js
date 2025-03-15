import { useState,useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./Calendar.css"

const Calendar = () => {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const arrivalRef = useRef(null);
  const departureRef = useRef(null);
  
 const increaseValue = (setter, value, max) => {
    if (value < max) setter(value + 1);
  };

  const decreaseValue = (setter, value, min) => {
    if (value > min) setter(value - 1);
  };


  return (
    <div className="booking-container">
      <div className="booking-grid">
        {/* Arrival Input */}
      <div className="input-group">
      <label>Arrival</label>
      <div className="input-wrapper">
        <input
          type="date"
          ref={arrivalRef}
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
          className="custom-date-input"
        />
        <FaCalendarAlt className="icon" onClick={() => arrivalRef.current.showPicker()} />
      </div>
    </div>

        {/* Departure Input */}
         <div className="input-group">
      <label>Departure</label>
      <div className="input-wrapper">
        <input
          type="date"
          ref={departureRef}
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          className="custom-date-input"
        />
        <FaCalendarAlt className="icon" onClick={() => departureRef.current.showPicker()} />
      </div>
    </div>
<div class="booking-options">
      {/* Rooms */}
      <div className="input-group-room">
        <label>Rooms</label>
        <div className="custom-number-input">
          <input type="number" value={rooms} readOnly />
          <div className="controls">
            <button onClick={() => increaseValue(setRooms, rooms, 5)}>▲</button>
            <button onClick={() => decreaseValue(setRooms, rooms, 1)}>▼</button>
          </div>
        </div>
      </div>

      {/* Adults */}
      <div className="input-group-room">
        <label>Adults</label>
        <div className="custom-number-input">
          <input type="number" value={adults} readOnly />
          <div className="controls">
            <button onClick={() => increaseValue(setAdults, adults, 5)}>▲</button>
            <button onClick={() => decreaseValue(setAdults, adults, 1)}>▼</button>
          </div>
        </div>
      </div>

      {/* Children */}
      <div className="input-group-room">
        <label>Children</label>
        <div className="custom-number-input">
          <input type="number" value={children} readOnly />
          <div className="controls">
            <button onClick={() => increaseValue(setChildren, children, 5)}>▲</button>
            <button onClick={() => decreaseValue(setChildren, children, 0)}>▼</button>
          </div>
        </div>
      </div>
        </div>
        <div className="input-group">
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

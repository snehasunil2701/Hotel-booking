import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Room.css";

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      {/* Swiper for Image Carousel */}
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} 
        spaceBetween={20}
        slidesPerView={1} 
        className="room-swiper">
        {room.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={room.name} className="room-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Room Info */}
      <div className="room-content">
        <h2 className="room-title">{room.name}</h2>
        <p className="room-size">{room.size} / <span className="room-view">{room.view}</span></p>
        <p className="room-description">{room.description}</p>

        {/* Amenities Dropdown */}
        <details className="room-amenities">
          <summary>IN-ROOM AMENITIES</summary>
          <ul>
            {room.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </details>

        {/* View Rates Button */}
        <button className="view-rates">VIEW RATES</button>
      </div>
    </div>
  );
};

export default RoomCard;

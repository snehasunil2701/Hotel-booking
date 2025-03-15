import React from "react";
import RoomCard from "./RoomCard";
import "./Room.css";
import Image1 from "../assets/room/room1.png";
import Image2 from "../assets/room/room2.png";
import Image3 from "../assets/room/room3.png";
import Image4 from "../assets/room/room4.png";
import Image5 from "../assets/room/room5.png";
import Image6 from "../assets/room/room6.png";
import Image7 from "../assets/room/room7.png";
import Image8 from "../assets/room/room8.png";
import Image9 from "../assets/room/room9.png";

const rooms = [
  {
    name: "Regency Suite",
    size: "645 sq ft",
    view: "View Varies",
    description: "Built to impress, this 60-square-metre suite (650 sq ft) features a luxurious king bed, furnished work area, and floor-to-ceiling windows.",
    images: [Image1, Image2, Image3],
    amenities: ["Free Wi-Fi", "King Bed", "Smart TV", "Mini Fridge"],
  },
  {
    name: "Diplomatic Suite",
    size: "1,280 sq ft",
    view: "View Varies",
    description: "Upgrade to a truly glamorous suite with marble-top interiors, an elegant workspace, extravagant bath, and luxurious living area.",
    images: [Image4, Image5, Image6],
    amenities: ["Ocean View", "Jacuzzi", "Living Area", "Personal Butler"],
  },
  {
    name: "Presidential Suite",
    size: "2,000 sq ft",
    view: "City Skyline",
    description: "The ultimate luxury experience with a private lounge, premium facilities, and an unbeatable city skyline view.",
    images: [Image7, Image8, Image9],
    amenities: ["Private Bar", "Luxury Sofa", "Rooftop View", "Personal Chef"],
  },
  {
    name: "Executive Suite",
    size: "850 sq ft",
    view: "Pool View",
    description: "A stylish suite with modern decor, comfortable bedding, and an exquisite pool view for relaxation.",
    images: [Image2, Image3, Image6],
    amenities: ["Poolside View", "Comfortable Bed", "Mini Bar", "Smart TV"],
  },
  {
    name: "Luxury Villa",
    size: "3,500 sq ft",
    view: "Garden View",
    description: "An exclusive villa with top-class luxury amenities and a breathtaking garden view.",
    images: [Image4, Image7, Image1],
    amenities: ["Private Garden", "Luxury Bath", "Personalized Butler Service"],
  },
  {
    name: "Skyline Penthouse",
    size: "4,500 sq ft",
    view: "Skyline Panoramic",
    description: "A breathtaking penthouse with a 360-degree skyline view and private rooftop lounge.",
    images: [Image8, Image9, Image5],
    amenities: ["360° View", "Luxury Dining", "Private Rooftop", "Concierge Service"],
  },
];

const Room = () => {
  return (
    <div className="room-head">
      <div className="room-head-inner">
        <h1 className="heading">Experience Unmatched Comfort & Luxury</h1>
        <p>From thoughtfully curated custom packages to opulent luxury suites, we offer the perfect stay for every traveler. Indulge in world-class amenities, breathtaking views, and unparalleled hospitality. Your dream getaway starts here.</p>
        <div className="double-arrow">
          <div className="arrow"></div>
          <div className="arrow second"></div>
        </div>
      </div>

      <div className="rooms-container">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>

      {/* Custom Package Booking Section */}
      <div class="package-container">
  <div class="hanging-bar"></div>
  
  <div class="hanging-card">
    <h2>Customize Your Stay</h2>
    <p>Choose your preferences for a tailor-made experience.</p>
    <button className="package-btn" onClick={() => window.location.href = "/custom"}>
  Book Custom Package
</button>

  </div>

  <div class="hanging-card">
    <h2>Luxury Beyond Expectations</h2>
    <p>Indulge in exclusive VIP treatments.</p>
    <button class="package-btn">Book Luxury Package</button>
  </div>

  <div class="hanging-card">
    <h2>Family Retreat</h2>
    <p>Enjoy a relaxing vacation with your loved ones.</p>
    <button class="package-btn">Book Family Package</button>
  </div>
</div>

    </div>
  );
};

export default Room;

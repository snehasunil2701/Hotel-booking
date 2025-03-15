import React from "react";
import Calendar from "./Calendar";
import "./Home.css";
import Image1 from "../assets/home/home2.png";
import Image2 from "../assets/home/deluxroom.png";
import Image3 from "../assets/home/lexuryroom.png";
import Image4 from "../assets/home/singleroom.png";
import Image5 from "../assets/home/home3.png";

const Home = () => {
  return (
    <div>
      <div className="home1">
        <h1>Experience Unparalleled Luxury – Book Your Dream Stay Today!</h1>
        <div className="double-arrow">
          <div className="arrow"></div>
          <div className="arrow second"></div>
        </div>
        <Calendar />
      </div>
      <div className="home-card">
        <div className="home-card-left">
          <img src={Image1} alt="" />
        </div>
        <div className="home-card-right">
          <h1>Enjoy Your Dream Vacation</h1>
          <p>
            Escape to your dream destination and create unforgettable memories.
            Whether you crave relaxation or adventure, your perfect getaway
            awaits. Let go of worries, embrace new experiences, and enjoy every
            moment to the fullest!
          </p>
          <button className="home-btn">Book Now</button>
        </div>
      </div>

      <div className="home-card-3">
        <div className="home-card-3inner">
          <img src={Image2} alt="Deluxe Contrast Room" />
          <h1>Deluxe Contrast Room</h1>
          <p>
            Experience the perfect blend of luxury and comfort in our Deluxe
            Contrast Room. Designed for relaxation, this room features modern
            interiors, premium bedding, and stunning city views.
          </p>
        </div>

        <div className="home-card-3inner">
          <img src={Image3} alt="Luxury Twins Room" />
          <h1>Luxury Twins Room</h1>
          <p>
            Ideal for friends or family, our Luxury Twins Room offers spacious
            accommodations with two comfortable twin beds, elegant décor, and
            top-class amenities for a relaxing stay.
          </p>
        </div>

        <div className="home-card-3inner">
          <img src={Image4} alt="Single Contrast Room" />
          <h1>Single Contrast Room</h1>
          <p>
            Designed for solo travelers, the Single Contrast Room provides a
            cozy yet stylish retreat with all essential amenities, ensuring a
            peaceful and restful experience.
          </p>
        </div>
      </div>

      <div className="head-image">
        <img src={Image5} alt="Background" />
        <div className="overlay">
          <div className="overlay-content">
            <h3>EXCLUSIVE TRAVEL DEAL</h3>
            <h1>Discover the World with <br /> Lex Holidays</h1>
            <p>Luxury Getaways | Budget-Friendly Packages | Customized Trips</p>
            <div className="price">
              <span>Starting From</span> <strong>$999</strong>
            </div>
            <button className="book-now">Plan Your Trip</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

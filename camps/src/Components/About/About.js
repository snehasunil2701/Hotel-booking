import "./About.css";
import React,{useEffect,useState} from "react";
import Swipercard from "./Section/Swiper/Swiper"
import Image1 from "./Section/Swiper/about/luxury.png"
import Image2 from "./Section/Swiper/about/24x7.png"
import Image3 from "./Section/Swiper/about/premium.png"

const About = () => {
  const [animateSupportCard, setAnimateSupportCard] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setTimeout(() => {
      setAnimateSupportCard(true);
    }, 500); // Delay for smooth animation
  }, []);

  return (
    <div className="about-head">
    <h1 className="heading">Experience the World with Lex Holidays</h1>
    <div className="double-arrow">
          <div className="arrow"></div>
          <div className="arrow second"></div>
        </div>
    <div className="about-container">
            <p>
        Welcome to Lex Holidays, where luxury meets comfort. We provide the
        finest vacation experiences with world-class accommodations,
        breathtaking views, and exceptional service tailored to your needs.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our goal is to create unforgettable travel experiences by offering
        exclusive holiday packages, luxurious stays, and personalized services.
        We aim to redefine travel by providing seamless, high-end experiences
        that cater to your every desire.
      </p>

      <h2>Our Vision</h2>
      <p>
        At Lex Holidays, we envision a world where travel is not just a
        getaway but an extraordinary adventure. We strive to be the leading
        provider of premium travel services, ensuring every journey is unique
        and memorable.
      </p>

      <h2>Our Destinations</h2>
      <p>
        We offer breathtaking vacations to some of the world’s most stunning
        destinations. From tropical beach resorts to majestic mountain retreats
        and bustling city getaways, we curate the best experiences for every
        traveler.
      </p>

      
      <h2>Contact Us</h2>
      <p>Email: support@lexholidays.com</p>
      <p>Phone: +1 234 567 890</p>
      <p>Address: 123 Luxury Lane, Travel City, TX 75001</p>
    </div>
    
      <div className="about-in">
      <h2>Why Choose Us?</h2>
      <div className="about-card">
        <div className="about-vcard-inner">
              <div className="icon-container">
                  <img src={Image1} alt="" />
              </div>
            <h1>Exclusive luxury packages</h1>
            <p>Premium travel with first-class stays, private tours, and personalized services.</p>
        </div>
        <div className={`about-vcard-inner ${animateSupportCard ? "transform-onload" : ""}`}>
              <div className="icon-container">
                  <img src={Image2} alt="" />
              </div>
          <h1>24/7 customer support</h1>
          <p>Round-the-clock assistance to ensure a seamless and stress-free travel experience.</p>
        </div>
        <div className="about-vcard-inner">
              <div className="icon-container">
                  <img src={Image3} alt="" />
              </div>
          <h1>Premium hospitality and world-class service</h1>
          <p>Experience top-tier hospitality with exceptional service tailored to your needs.</p>
        </div>
      </div>
        {/* <ul>
          <li>Exclusive luxury packages</li>
          <li>Handpicked destinations</li>
          <li>24/7 customer support</li>
          <li>Tailor-made experiences</li>
          <li>Premium hospitality and world-class service</li>
          <li>Hassle-free booking and concierge assistance</li>
          <li>Eco-friendly and sustainable tourism initiatives</li>
        </ul> */}
      </div>
    <Swipercard/>
    </div>
  );
};

export default About;

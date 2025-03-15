import React from "react";
import "./Whatsapp.css"
import { FaWhatsapp } from "react-icons/fa"; 

const Whatsapp = () => {
  const phoneNumber = "+91 7025416798"; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default Whatsapp;

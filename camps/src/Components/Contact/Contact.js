import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Contact.css";

export default function ContactUs() {
  const {
    register: registerBooking,
    handleSubmit: handleSubmitBooking,
    reset: resetBooking,
    formState: { errors: errorsBooking },
  } = useForm();

  const {
    register: registerInquiry,
    handleSubmit: handleSubmitInquiry,
    reset: resetInquiry,
    formState: { errors: errorsInquiry },
  } = useForm();

  const [loadingBooking, setLoadingBooking] = useState(false);
  const [messageBooking, setMessageBooking] = useState("");

  const [loadingInquiry, setLoadingInquiry] = useState(false);
  const [messageInquiry, setMessageInquiry] = useState("");

  // Load the access key from .env.local
  const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

  const onSubmitBooking = async (data) => {
    setLoadingBooking(true);
    setMessageBooking("");

    const formData = new FormData();
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New Booking Request");

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessageBooking("Your booking request has been submitted successfully!");
        resetBooking();
      } else {
        setMessageBooking("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessageBooking("Failed to send the request. Check your internet connection.");
    } finally {
      setLoadingBooking(false);
    }
  };

  const onSubmitInquiry = async (data) => {
    setLoadingInquiry(true);
    setMessageInquiry("");

    const formData = new FormData();
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New Inquiry Message");

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessageInquiry("Your message has been sent successfully!");
        resetInquiry();
      } else {
        setMessageInquiry("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessageInquiry("Failed to send the request. Check your internet connection.");
    } finally {
      setLoadingInquiry(false);
    }
  };

  return (
    <div className="container">
      <div className="hero-section">
        <h1>Get in Touch with Us</h1>
        <p>Contact us for bookings, inquiries, or special requests.</p>
      </div>

      <div className="form-layout">
        {/* Booking Form */}
        <div className="form-container">
          <h2>Book Your Stay</h2>
          <form onSubmit={handleSubmitBooking(onSubmitBooking)}>
            <input {...registerBooking("name", { required: true })} placeholder="Full Name" className="input-style" />
            {errorsBooking.name && <p className="error-text">Name is required</p>}

            <input {...registerBooking("email", { required: true })} type="email" placeholder="Email Address" className="input-style" />
            {errorsBooking.email && <p className="error-text">Valid email is required</p>}

            <input {...registerBooking("phone", { required: true })} type="tel" placeholder="Phone Number" className="input-style" />
            {errorsBooking.phone && <p className="error-text">Phone number is required</p>}

            <div className="grid-container">
              <input {...registerBooking("checkin", { required: true })} type="date" className="input-style" />
              <input {...registerBooking("checkout", { required: true })} type="date" className="input-style" />
            </div>

            <textarea {...registerBooking("requests")} placeholder="Special Requests" className="input-style" />

            <button type="submit" className="submit-btn" disabled={loadingBooking}>
              {loadingBooking ? "Submitting..." : "Request Booking"}
            </button>
          </form>
          {messageBooking && <p className="status-message">{messageBooking}</p>}
        </div>

        {/* Inquiry Form */}
        <div className="inquiry-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmitInquiry(onSubmitInquiry)}>
            <input {...registerInquiry("inquiryName", { required: true })} type="text" placeholder="Your Name" className="input-style" />
            {errorsInquiry.inquiryName && <p className="error-text">Name is required</p>}

            <input {...registerInquiry("inquiryEmail", { required: true })} type="email" placeholder="Your Email" className="input-style" />
            {errorsInquiry.inquiryEmail && <p className="error-text">Valid email is required</p>}

            <input {...registerInquiry("subject", { required: true })} type="text" placeholder="Subject" className="input-style" />
            {errorsInquiry.subject && <p className="error-text">Subject is required</p>}

            <textarea {...registerInquiry("message", { required: true })} placeholder="Your Message" className="input-style" />
            {errorsInquiry.message && <p className="error-text">Message is required</p>}

            <button type="submit" className="submit-btn" disabled={loadingInquiry}>
              {loadingInquiry ? "Submitting..." : "Send Message"}
            </button>
          </form>
          {messageInquiry && <p className="status-message">{messageInquiry}</p>}
        </div>
      </div>

      <div className="contact-info">
        <h2>Our Contact Details</h2>
        <p><strong>📍 Address:</strong> 123 Luxury Street, City, Country</p>
        <p><strong>📞 Phone:</strong> +123 456 7890</p>
        <p><strong>📧 Email:</strong> contact@hotelname.com</p>
      </div>
    </div>
  );
}

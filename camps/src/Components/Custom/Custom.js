import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import "./Custom.css";
import Image1 from "../assets/room/room10.png";

const Custom = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Web3Forms Access Key (Replace with your actual key)
  const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

  // Options for hotels and activities
  const hotelOptions = [
    { value: "budget", label: "Budget" },
    { value: "standard", label: "Standard" },
    { value: "luxury", label: "Luxury" }
  ];

  const activityOptions = [
    { value: "sightseeing", label: "Sightseeing" },
    { value: "adventure", label: "Adventure" },
    { value: "beach", label: "Beach & Relaxation" }
  ];

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("access_key", ACCESS_KEY);  // ✅ Required for Web3Forms
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("destination", data.destination);
    formData.append("checkin", data.checkin);
    formData.append("checkout", data.checkout);
    formData.append("hotelType", data.hotelType?.value || "Not selected");
    formData.append("activities", JSON.stringify(data.activities?.map(a => a.value) || []));
    formData.append("requests", data.requests);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("API Response:", result); 

      if (result.success) {
        setMessage(" Your custom package request has been submitted!");
        reset();
      } else {
        setMessage(`Error: ${result.message || "Something went wrong. Try again."}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage(" Failed to send request. Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="custom-package-container">
      <div className="custom-layout">
        {/* Left Side: Large Room Image */}
        <div className="room-image-container">
          <img 
            src={Image1} 
            alt="Luxury Room" 
            className="room-image"
          />
        </div>

        {/* Right Side: Description and Form */}
        <div className="form-container">
          <h2>Book a Package Tailored to Your Needs</h2>
          <p className="description-text">
            Experience luxury and comfort tailored to your needs. Choose your preferred hotel type, activities, and 
            any special requests to create a perfect travel experience. Our team will ensure everything is arranged to your preference.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} placeholder="Full Name" className="input-style" />
            {errors.name && <p className="error-text">Name is required</p>}

            <input {...register("email", { required: true })} type="email" placeholder="Email" className="input-style" />
            {errors.email && <p className="error-text">Valid email is required</p>}

            <input {...register("phone", { required: true })} type="tel" placeholder="Phone" className="input-style" />
            {errors.phone && <p className="error-text">Phone number is required</p>}

            <input {...register("destination", { required: true })} placeholder="Destination" className="input-style" />
            {errors.destination && <p className="error-text">Destination is required</p>}

            <div className="grid-container">
              <input {...register("checkin", { required: true })} type="date" className="input-style" />
              <input {...register("checkout", { required: true })} type="date" className="input-style" />
            </div>

            <label>Hotel Type</label>
            <Controller
              name="hotelType"
              control={control}
              render={({ field }) => <Select {...field} options={hotelOptions} className="select-style" />}
            />

            <label>Activities</label>
            <Controller
              name="activities"
              control={control}
              render={({ field }) => <Select {...field} options={activityOptions} isMulti className="select-style" />}
            />

            <textarea {...register("requests")} placeholder="Additional Requests" className="input-style" />

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Request Package"}
            </button>
          </form>

          {message && <p className="status-message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Custom;

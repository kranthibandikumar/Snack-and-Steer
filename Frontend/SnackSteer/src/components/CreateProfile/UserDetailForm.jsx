/** @format */

import React, { useState } from "react";
import "./UserDetailForm.css";
import Navbar from "../Navbar/Navbar";
import TestingFooter from "../../pages/TestingFooter";

const UserDetailForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    location: "",
    vehicleType: "",
    preferredMode: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: userDetails.name,
      city: userDetails.location,
      vehicleType: userDetails.vehicleType,
      preferredMode: userDetails.preferredMode,
      emergencyContact: userDetails.emergencyContact,
    };
    console.log(payload);

    const token = localStorage.getItem("jwtToken");

    fetch("https://snack-steer.onrender.com/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          alert("User details submitted successfully!");
        } else {
          console.error("Error submitting user details:", response.status);
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  };

  return (
    <>
    <Navbar/>
      <div className="user-detail-form-container">
        <h2>User Detail Form</h2>
        <form onSubmit={handleSubmit} className="user-detail-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              name="location"
              value={userDetails.location}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Vehicle Type:
            <select
              name="vehicleType"
              value={userDetails.vehicleType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="bicycle">Bicycle</option>
              <option value="scooter">Scooter</option>
            </select>
          </label>

          <label>
            Preferred Mode of Transport:
            <select
              name="preferredMode"
              value={userDetails.preferredMode}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="own">Own Vehicle</option>
              <option value="public">Public Transport</option>
              <option value="ride-share">Ride Share</option>
            </select>
          </label>
          <label>
            Emergency Contact:
            <input
              type="text"
              name="emergencyContact"
              value={userDetails.emergencyContact}
              onChange={handleChange}
              placeholder="Contact number"
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
      <TestingFooter/>
    </>
  );
};

export default UserDetailForm;

/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserRound, Mail, Phone, Lock } from "lucide-react";
import "../styles/Register.css"; // Import the separate CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("https://snack-steer.onrender.com/auth/register", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      const userProfile = {
        name: formData.name,
        email: formData.email,
      };

      // Save user profile data to localStorage
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
      setUsername(userProfile.name); // Set the username state

      navigate("/login"); // Navigate to login after registration
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (storedProfile && storedProfile.name) {
      setUsername(storedProfile.name); // Load the username from localStorage
    }
  }, []);

  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className="register-title">Create Account</h2>
        {error && <p className="register-error">{error}</p>}
        <form onSubmit={handleSubmit} className="form-fields">
          <div className="form-group">
            <UserRound className="form-icon" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <Mail className="form-icon" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <Phone className="form-icon" size={20} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <Lock className="form-icon" size={20} />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <Lock className="form-icon" size={20} />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="form-button">
            Register
          </button>
        </form>
        <p className="register-footer">
          Already have an account?{" "}
          <Link to="/login" className="register-link">
            Login here
          </Link>
        </p>
        {username && <p>Welcome, {username}!</p>}
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import '../styles/TransportPage.css'; // Ensure to link the CSS
import { Link } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
function TransportPage() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <Navbar/>
    <div className="transport-page-container">
      <header className="header">
        <h1>On-Demand Transport Assistance</h1>
        <p>Choose from quick transport alternatives and track your vehicle.</p>
      </header>

     
      <section className="transport-options">
        <div className="option">
          <h2>Quick Transport Alternatives</h2>
          <p>Select a transport option to exit the traffic-congested areas.</p>
          
          <form>
            <label className="transport-option">
              <input
                type="radio"
                name="transport"
                value="Bicycle"
                checked={selectedOption === "Bicycle"}
                onChange={handleOptionChange}
                />
              <span className="checkmark"></span> Bicycle
            </label>

            <label className="transport-option">
              <input
                type="radio"
                name="transport"
                value="Scooter"
                checked={selectedOption === "Scooter"}
                onChange={handleOptionChange}
                />
              <span className="checkmark"></span> Scooter
            </label>

            <label className="transport-option">
              <input
                type="radio"
                name="transport"
                value="Custom"
                checked={selectedOption === "Custom"}
                onChange={handleOptionChange}
                />
              <span className="checkmark"></span> Custom
              {selectedOption === "Custom" && (
                <input
                type="text"
                placeholder="Enter your transport option"
                className="custom-input"
                />
              )}
            </label>
          </form>
        </div>

        <div className="vehicle-tracking">
          <h2>Vehicle Tracking</h2>
          <p>Monitor your vehicle’s journey to the drop-off location in real-time.</p>
          <Link to="/track-vehicle" className="track-link">Track My Vehicle</Link>
        </div>
      </section>

   
      <footer className="footer">
        <p>&copy; 2025 Snack & Steer Services. All rights reserved.</p>
      </footer>
    </div>
              </>
  );
}

export default TransportPage;

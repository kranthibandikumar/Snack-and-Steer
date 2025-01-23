import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EmergencySupport.css'; // Ensure to link the CSS
import Navbar from '../components/Navbar/Navbar';
import TestingFooter from './TestingFooter';

function EmergencySupport() {
  return (

    <>
    <Navbar/>
    
    <div className="emergency-support-container">

      <div className="emergency-support-content">
        <h2>🚑 Emergency Support</h2>
        
        <section className="medical-assistance">
          <h3>🩺 Medical Assistance</h3>
          <p>
            In case of an emergency, you can book medical help or request minor first-aid deliveries. Our network of medical professionals is available 24/7 to assist you with any urgent medical needs.
          </p>
          <p>
            To request assistance, please click the button below and provide your location.
          </p>
          <button className="request-button">Request Medical Assistance</button>
        </section>

        <section className="vehicle-assistance">
          <h3>🚗 Vehicle Breakdown Assistance</h3>
          <p>
            If your vehicle breaks down in traffic, don't panic! You can request immediate mechanical assistance to fix your vehicle or arrange a tow. Simply click the button below and provide details of the situation.
          </p>
          <p>
            To request vehicle assistance, click below and fill out the form.
          </p>
          <button className="request-button">Request Vehicle Assistance</button>
        </section>
        
        <Link to="/dashboard" className="back-to-dashboard">Back to Dashboard</Link>
      </div>
    </div>
    <TestingFooter/>
    </>
  );
}

export default EmergencySupport;

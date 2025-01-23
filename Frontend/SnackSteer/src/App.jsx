import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard"
import DeliveryPage from "../src/pages/DeliveryPage";
import EmergencySupport from "./pages/EmergencySupport";
import Login from "./pages/Login";
import Register from "./pages/Register"
import { Navigate } from "react-router-dom";
import FoodPage from "./components/FoodPage/Foodpage";
import UserDetailForm from "./components/CreateProfile/UserDetailForm";
import TransportPage from "./pages/TransportPage";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map" element={<DeliveryPage />} />
        <Route path="/emergency-support" element={<EmergencySupport />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserDetailForm/>} />
        <Route path="/foodpage" element={<FoodPage/>} />
        <Route path="/transport" element= {<TransportPage/>} />
        {/* <Route path="/home" element={<Home />} /> */}

        {/* Add other routes here */}
      </Routes>
    </Router>
   
    </>
  );
}

export default App;

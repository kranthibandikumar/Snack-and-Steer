/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";
import "./TrafficReliefDashboard.css"; // Optional, for custom styles
import TestingFooter from "../../pages/TestingFooter";


const TrafficReliefDashboard = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [loading, setLoading] = useState(true);
  const GOOGLE_MAPS_API_KEY = "AIzaSyAJ8MSlTWNHYOvTpuMB-v3NT8q7mr2jhyg"; // Replace with your API key

  // Function to fetch traffic data from Google API
  const fetchTrafficData = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=40.748817,-73.985428&destinations=34.052235,-118.243683&departure_time=now&key=${GOOGLE_MAPS_API_KEY}`
      );

      console.log(response.data); // Log the response to debug

      if (response.data && response.data.rows[0].elements) {
        const traffic = response.data.rows[0].elements.map(
          (element, index) => ({
            time: `Trip ${index + 1}`, // Time based on index
            traffic: element.duration_in_traffic
              ? element.duration_in_traffic.value / 60 // Convert to minutes
              : 0, // Traffic time in minutes
          })
        );
        setTrafficData(traffic);
      }
    } catch (error) {
      console.error("Error fetching traffic data: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the data when the component mounts
  useEffect(() => {
    fetchTrafficData();
  }, []);

  // Loading Spinner or message while data is being fetched
  if (loading) {
    return <div className="loading-message">Loading Traffic Data...</div>;
  }

  // Test data if trafficData is empty (for debugging)
  const testData = [
    { time: "Trip 1", traffic: 5 },
    { time: "Trip 2", traffic: 10 },
    { time: "Trip 3", traffic: 8 },
    { time: "Trip 4", traffic: 12 },
  ];

  // Use the fetched traffic data, or fallback to test data
  const chartData = trafficData.length > 0 ? trafficData : testData;

  return (
      <>
    <div className="dashboard-container">
      <h3 className="dashboard-title">Traffic Data Visualization</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="traffic"
              fill="#8884d8"
              barSize={40}
              radius={[10, 10, 0, 0]} // Rounded corners
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </>
  );
};

export default TrafficReliefDashboard;

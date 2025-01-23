import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer, Marker, InfoWindow } from "@react-google-maps/api";
import axios from "axios";
import '../styles/DeliveryPage.css'; // Import the updated CSS file
import { Link } from "react-router-dom";
import TestingFooter from "./TestingFooter";
import Navbar from "../components/Navbar/Navbar";

const GOOGLE_MAPS_API_KEY = "AIzaSyAJ8MSlTWNHYOvTpuMB-v3NT8q7mr2jhyg"; // Replace with your own API key

const DeliveryPage = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState("");
  const [directions, setDirections] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [vehiclePosition, setVehiclePosition] = useState(null); // Real-time vehicle position
  const [manualLocation, setManualLocation] = useState(""); // New state for manual location
  const [isManual, setIsManual] = useState(false); // Track if manual location is selected

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setOrigin({ lat: latitude, lng: longitude });
        },
        () => alert("Unable to fetch your location")
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const getDirections = () => {
    if (!origin || !destination) {
      alert("Please provide both your location and destination.");
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
          fetchRestaurantsAlongRoute(result.routes[0].overview_path);
        } else {
          alert("Could not fetch directions. Please try again.");
        }
      }
    );
  };

  const fetchRestaurantsAlongRoute = (path) => {
    const service = new google.maps.places.PlacesService(document.createElement("div"));
    const waypoints = path.filter((_, index) => index % Math.floor(path.length / 10) === 0);

    const restaurantPromises = waypoints.map((point) => {
      return new Promise((resolve) => {
        service.nearbySearch(
          {
            location: point,
            radius: 5000,
            type: "restaurant",
          },
          (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              resolve(results);
            } else {
              resolve([]);
            }
          }
        );
      });
    });

    Promise.all(restaurantPromises).then((allResults) => {
      const uniqueRestaurants = Array.from(
        new Map(
          allResults.flat().map((res) => [res.place_id, res])
        ).values()
      );
      setRestaurants(uniqueRestaurants);
    });
  };

  const postRestaurantDetails = async (restaurant) => {
    try {
      const response = await axios.post("YOUR_BACKEND_API_URL/restaurant", restaurant);
      console.log("Restaurant details sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending restaurant details:", error);
    }
  };

  const handleManualLocationChange = (e) => {
    setManualLocation(e.target.value);
  };

  const setManualOrigin = () => {
    if (!manualLocation) {
      alert("Please enter a valid location.");
      return;
    }

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: manualLocation }, (results, status) => {
      if (status === "OK") {
        setOrigin(results[0].geometry.location);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  useEffect(() => {
    const socket = new WebSocket("YOUR_WEBSOCKET_URL"); // WebSocket URL for vehicle position

    socket.onmessage = (event) => {
      const vehicleData = JSON.parse(event.data);
      setVehiclePosition({ lat: vehicleData.lat, lng: vehicleData.lng });
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
     <Navbar/>
      <div className="container">
        <h1>Traffic Relief Dashboard 🚗</h1>

        <div className="input-container">
          <button onClick={getCurrentLocation} className="btn">📍 Get Current Location</button>

          {/* Show the manual location input only when isManual is false */}
          {!isManual && (
            <button onClick={() => setIsManual(true)} className="green-btn">
              🛠️ Set Location Manually
            </button>
          )}

          {/* Manual location input - visible when isManual is true */}
          {isManual && (
            <>
              <input
                type="text"
                placeholder="Enter your location"
                value={manualLocation}
                onChange={handleManualLocationChange}
                className="input"
              />
              <button onClick={setManualOrigin} className="yellow-btn">🔄 Set Manual Location</button>
            </>
          )}

          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="input"
          />
          <button onClick={getDirections} className="green-btn">🛣️ Get Directions</button>
        </div>

        <div className="main-content">
          <div className="map-container">
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
              <GoogleMap
                center={origin || { lat: 27.5937, lng: 80.9629 }}
                zoom={12}
                mapContainerStyle={{ height: "100%", width: "100%" }}
              >
                {origin && <Marker position={origin} label="You" />}
                {directions && <DirectionsRenderer directions={directions} />}
                {vehiclePosition && <Marker position={vehiclePosition} label="🚚 Vehicle" />}
                {restaurants.map((restaurant) => (
                  <Marker
                    key={restaurant.place_id}
                    position={restaurant.geometry.location}
                    onClick={() => setSelectedRestaurant(restaurant)}
                  />
                ))}
                {selectedRestaurant && (
                  <InfoWindow
                    position={selectedRestaurant.geometry.location}
                    onCloseClick={() => setSelectedRestaurant(null)}
                  >
                    <div>
                      <h3>{selectedRestaurant.name}</h3>
                      <p>{selectedRestaurant.vicinity}</p>
                      <button
                        onClick={() => postRestaurantDetails(selectedRestaurant)}
                        className="send-btn"
                      >
                        📤 Send to Backend
                      </button>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="restaurants-list">
            <h4>🍽️ Restaurants Along the Route</h4>
            <ul>
              {restaurants.slice(0, 10).map((restaurant) => (
                <li key={restaurant.place_id}>
                  <strong>{restaurant.name}</strong>
                  <br />
                  {restaurant.vicinity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <TestingFooter/>
    </>
  );
};

export default DeliveryPage;

/** @format */

import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router";

const GOOGLE_MAPS_API_KEY = "AIzaSyAJ8MSlTWNHYOvTpuMB-v3NT8q7mr2jhyg";

const Map = () => {
  const center = { lat: 27.5937, lng: 80.9629 }; // Default center position

  return (
    <div className="map-container-wrapper"  >
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          center={center}
          zoom={3}
          mapContainerStyle={{ height: "410px", width: "564px" }}
          className="map-component"
        />
      </LoadScript>
    </div>
  );
};

export default Map;

// Map.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import "leaflet/dist/leaflet.css";
import redLocation from "../assets/locationRed.png";
import greenLocation from "../assets/locationGreen.png";
import arrow from "../assets/Frame.png";

function Map({ startingCoords, endCoords, speed }) {
  const [currentCoords, setCurrentCoords] = useState(startingCoords);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const dx = endCoords[0] - startingCoords[0];
  //     const dy = endCoords[1] - startingCoords[1];
  //     const distance = Math.sqrt(dx * dx + dy * dy); // Euclidean distance between the two points
  //     const totalDistance = distance * 1000; // Convert to meters
  //     const time = totalDistance / ((speed * 1000) / 3600); // Calculate time based on speed
  //     const ratio = Math.min(1, time / (1000 / 2)); // Assume 2 seconds for refresh rate
  //     const newCoords = [
  //       startingCoords[0] + dx * ratio,
  //       startingCoords[1] + dy * ratio,
  //     ];
  //     setCurrentCoords(newCoords);
  //   }, 2000); // Assume 2 seconds for refresh rate

  //   return () => clearInterval(interval);
  // }, [startingCoords, endCoords, speed]);
  // const calculateRotation = () => {
  //   const angle =
  //     Math.atan2(
  //       endCoords[1] - currentCoords[1],
  //       endCoords[0] - currentCoords[0]
  //     ) *
  //     (180 / Math.PI);
  //   return angle;
  // };
  // const moveArrow = () => {
  //   const currentTime = Date.now();
  //   const elapsedTime = currentTime - startTime;
  //   const ratio = Math.min(1, elapsedTime / time);
  //   const newPosition = [
  //     startingCoords[0] + dx * ratio,
  //     startingCoords[1] + dy * ratio,
  //   ];
  //   setArrowPosition(newPosition);

  //   if (ratio < 1) {
  //     requestAnimationFrame(moveArrow);
  //   }
  // };

  // moveArrow();
  const customIcon = L.icon({
    iconUrl: redLocation,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  const customIcon2 = L.icon({
    iconUrl: greenLocation,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={currentCoords}
      zoom={10}
      style={{
        height: "550px",
        width: "90%",
        margin: "auto",
        position: "relative",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={startingCoords} icon={customIcon}>
        <Popup> starting coords</Popup>
        <img
          className="arw"
          src={arrow}
          alt=""
          style={{ transform: "translate3d(17px, 1px, 10px)" }}
          position={startingCoords}
        />
      </Marker>
      <Marker position={endCoords} icon={customIcon2}>
        <Popup>ending coords</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;

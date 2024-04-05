// App.js
import React from "react";
import Map from "./components/Map";
import CoordinatesDisplay from "./components/CoordinatesDisplay";

function App() {
  const startingCoords = [22.1696, 91.4996];
  const endCoords = [22.2637, 91.7159];
  const speed = 20;
  const refreshRate = 500; // milliseconds (2 FPS)

  return (
    <div>
      <CoordinatesDisplay
        startingCoords={startingCoords}
        endCoords={endCoords}
        speed={speed}
      />
      <Map
        startingCoords={startingCoords}
        endCoords={endCoords}
        speed={speed}
      />
    </div>
  );
}

export default App;

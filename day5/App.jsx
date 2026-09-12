import { useState } from "react";
import "./App.css";

function App() {
  const [showDestinations, setShowDestinations] = useState(true);

  const destinations = [
    "Raigad Fort",
    "Goa",
    "Mahabaleshwar",
    "Jaipur"
  ];

  return (
    <div className="container">
      <div className="travel-card">
        <h1>Travel Destination Explorer</h1>

        <p>Explore popular destinations</p>

        <button
          onClick={() => setShowDestinations(!showDestinations)}
        >
          {showDestinations ? "Hide Destinations" : "Show Destinations"}
        </button>

        {showDestinations && (
          <div className="destination-list">
            {destinations.map((destination, index) => (
              <div className="destination" key={index}>
                <h2>{destination}</h2>
                <span>Explore Destination →</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
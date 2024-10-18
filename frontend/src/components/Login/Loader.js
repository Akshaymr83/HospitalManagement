// src/components/FullScreenLoader.js

import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./login.css";
 // Import the CSS for styling

const Loader = () => {
  return (
    <div className="fullscreen-loader">
      <ThreeDots
        color="#00BFFF" // Loader color
        height={80} // Loader height
        width={80} // Loader width
      />
      <p>Loading...</p> {/* Optional message */}
    </div>
  );
};

export default Loader;

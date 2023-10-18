// Importing necessary libraries and components
import React from "react";
import ReactDOM from "react-dom";

// Importing stylesheet and App component
import "./index.css";
import App from "./App";

// Rendering App component inside React's StrictMode to catch potential problems in the app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Specifying the root element where the app will be mounted
);

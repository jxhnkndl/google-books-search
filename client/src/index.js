// Import dependencies
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Render the React app
ReactDOM.render(<App />, document.getElementById("root"));

// Register service worker
registerServiceWorker();
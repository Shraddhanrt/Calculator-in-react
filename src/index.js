import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Calculator from "./components/calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

// reportWebVitals();

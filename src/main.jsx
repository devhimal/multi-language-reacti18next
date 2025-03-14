import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ width: "100%" }}>
      <App />
    </div>
  </React.StrictMode>,
);

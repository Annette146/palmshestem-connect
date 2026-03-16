import React from "react";
import ReactDOM from "react-dom/client";
import TeamSection from "./components/TeamSection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Our Team</h1>
      <TeamSection />
    </div>
  </React.StrictMode>
);
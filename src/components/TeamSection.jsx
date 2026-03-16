import React from "react";
import { team } from "../data/team";

export default function TeamSection() {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      {team.map((member) => (
        <div
          key={member.name}
          style={{
            textAlign: "center",
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "15px",
            width: "200px",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            width={150}
            height={150}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <h3 style={{ margin: "15px 0 5px" }}>{member.name}</h3>
          <p style={{ margin: 0, color: "#555" }}>{member.role}</p>
        </div>
      ))}
    </div>
  );
}
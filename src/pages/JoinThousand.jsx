import React from "react";
import "../pages/JoinThousand.css";

export default function JoinThousand() {
  return (
    <div className="hero-wrapper">
      <h2 className="hero-heading">
        Join Thousands of Professionals Using LeadCRM
      </h2>

      <div className="hero-box">
        <h1 className="hero-title">
          Your LinkedIn Powerhouse for Smarter Lead Management
        </h1>

        {/* Badge Row */}
        <div className="hero-badges">
          <span className="badge">
            <img src="/src/images/salf.png" alt="" />
          </span>
          <span className="badge">
            <img src="/src/images/hub.png" alt="" />
          </span>
          <span className="badge">
            <img src="/src/images/pip.png" alt="" />
          </span>
          <span className="badge">
            <img src="/src/images/rati (2).png" alt="" />
          </span>
          <span className="badge">
            <img src="/src/images/rati (1).png" alt="" />
          </span>
        </div>

        {/* Cards Preview Section */}
        <div className="hero-cards">

          <div className="card-box">
            <img src="/src/images/1a.png" alt="" />
          </div>

          <div className="card-box">
            <img src="/src/images/2a.png" alt="" />
          </div>

          <div className="card-box">
            <img src="/src/images/3a.png" alt="" />
          </div>

          <div className="card-box multiple">
            <img src="/src/images/44.png" alt="" />
            <img src="/src/images/444.png" alt="" />
          </div>

          <div className="card-box multiple">
            <img src="/src/images/55.png" alt="" />
            <img src="/src/images/555.png" alt="" />
          </div>

        </div>
      </div>

      <button className="hero-btn">Get Started Today →</button>
    </div>
  );
}

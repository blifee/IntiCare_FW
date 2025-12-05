import React from "react";
import "../pages/JoinThousand.css";

// Import all images
import Salf from "../images/salf.png";
import Hub from "../images/hub.png";
import Pip from "../images/pip.png";
import Rati2 from "../images/rati (2).png";
import Rati1 from "../images/rati (1).png";

import Img1a from "../images/1a.png";
import Img2a from "../images/2a.png";
import Img3a from "../images/3a.png";
import Img44 from "../images/44.png";
import Img444 from "../images/444.png";
import Img55 from "../images/55.png";
import Img555 from "../images/555.png";

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
            <img src={Salf} alt="Salf" />
          </span>
          <span className="badge">
            <img src={Hub} alt="HubSpot" />
          </span>
          <span className="badge">
            <img src={Pip} alt="Pipedrive" />
          </span>
          <span className="badge">
            <img src={Rati2} alt="Rating 2" />
          </span>
          <span className="badge">
            <img src={Rati1} alt="Rating 1" />
          </span>
        </div>

        {/* Cards Preview Section */}
        <div className="hero-cards">
          <div className="card-box">
            <img src={Img1a} alt="Card 1" />
          </div>

          <div className="card-box">
            <img src={Img2a} alt="Card 2" />
          </div>

          <div className="card-box">
            <img src={Img3a} alt="Card 3" />
          </div>

          <div className="card-box multiple">
            <img src={Img44} alt="Card 44" />
            <img src={Img444} alt="Card 444" />
          </div>

          <div className="card-box multiple">
            <img src={Img55} alt="Card 55" />
            <img src={Img555} alt="Card 555" />
          </div>
        </div>
      </div>

      <button className="hero-btn">Get Started Today →</button>
    </div>
  );
}

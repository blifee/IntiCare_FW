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

import BgPattern from "../images/bg-pattern.png";

export default function JoinThousand() {
  return (
    <div
      className="hero-wrapper"
      style={{
        backgroundImage: `url(${BgPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="hero-heading">
        Join Thousands of Professionals Using LeadCRM
      </h2>

      <div className="hero-box">
        <h1 className="hero-title">
          Your LinkedIn Powerhouse for Smarter Lead Management
        </h1>

        {/* Badge Row */}
        <div className="hero-badges">
          {[Salf, Hub, Pip, Rati2, Rati1].map((img, index) => (
            <span key={index} className="badge">
              <img src={img} alt="" />
            </span>
          ))}
        </div>

        {/* Cards Preview Section */}
        <div className="hero-cards">
          <div className="card-box">
            <img src={Img1a} alt="" />
          </div>

          <div className="card-box">
            <img src={Img2a} alt="" />
          </div>

          <div className="card-box">
            <img src={Img3a} alt="" />
          </div>

          <div className="card-box multiple">
            <img src={Img44} alt="" />
            <img src={Img444} alt="" />
          </div>

          <div className="card-box multiple">
            <img src={Img55} alt="" />
            <img src={Img555} alt="" />
          </div>
        </div>
      </div>

      <button className="hero-btn">Get Started Today →</button>
    </div>
  );
}

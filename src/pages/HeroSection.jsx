import React from "react";
import "./HeroSection.css";

// IMPORT ALL LOCAL IMAGES CORRECTLY
import CapterraLogo from "../images/capterra-logo.png";
import CapterraLogo2 from "../images/capterra-logo2.png";
import ChromeLogo from "../images/chrome-logo.png";

export default function HeroSection() {
  const items = [
    {
      name: "Piperdrive",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/01/24122946/Pipedrive.webp",
    },
    {
      name: "B",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/07/30091727/google-sheets-logo.webp",
    },
    {
      name: "C",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/01/24122947/Salesforce.webp",
    },
    {
      name: "D",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/08/13130023/cooper-crm.png",
    },
    {
      name: "D",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/11/11132119/GHL-WEBP.webp",
    },
  ];

  const loopItems = [...items, ...items];

  return (
    <div className="hero-background">

      {/* Top Tag */}
      <div className="rocket">
        <span className="ro">🚀Thousands of Professional using LeadCRM</span>
      </div>

      {/* Main Heading */}
      <div className="middleText">
        <h1>
          LinkedIn CRM Integration <br />
          Capture, Sync and Enrich in
          <span className="blueText"> Both Ways</span>
        </h1>
      </div>

      {/* Subtitle */}
      <div className="parab">
        <p>
          Automatically sync LinkedIn prospects to your CRM and overlay existing CRM
          contacts on <br />
          LinkedIn profiles. Complete bi-directional integration with HubSpot,
          Salesforce, and Pipedrive.
        </p>
      </div>

      {/* Infinite Scroll Logos */}
      <div className="scroll-container">
        <span className="side-text">Works with</span>

        <div className="scroll-box">
          <div className="scroll-inner">
            {loopItems.map((item, index) => (
              <div className="scroll-item" key={index}>
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <span className="side-text">& more</span>
      </div>

      {/* Rating Section */}
      <div className="ratings-row">

        {/* Rating 1 */}
        <div className="rating-item">
          <div className="rating-logo-box">
            <img src={CapterraLogo} className="rating-logo" alt="Capterra" />
          </div>

          <div className="stars">
            {[1, 2, 3, 4, 5].map((n) => <span key={n}>⭐</span>)}
          </div>

          <span className="rating-value">5/5</span>
        </div>

        {/* Rating 2 */}
        <div className="rating-item">
          <div className="rating-logo-box">
            <img src={CapterraLogo2} className="rating-logo" alt="Capterra 2" />
          </div>

          <div className="stars">
            {[1, 2, 3, 4, 5].map((n) => <span key={n}>⭐</span>)}
          </div>

          <span className="rating-value">5/5</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="cta-row">
        <div className="chrome-btn">
          <div className="chrome-text">
            <span className="small-text">Available in</span>
            <span className="big-text">Chrome Web Store</span>
          </div>

          <div className="chrome-icon-wrapper">
            <img src={ChromeLogo} className="chrome-icon" alt="Chrome Store" />
          </div>
        </div>

        <div className="green-btn">Get Your Account Now!</div>
      </div>
    </div>
  );
}

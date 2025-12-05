import React from "react";
import "../pages/HeroSection.css";

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

  // we duplicate items array to create infinite scrolling loop
  const loopItems = [...items, ...items];

  return (
    <>
      <div className="hero-background">
        <div className="rocket">
          <span className="ro">🚀Thousands of Professional using LeadCRM</span>
        </div>
        {/* //text.... */}
        <div className="middleText">
          <h1>
            LinkedIn CRM Integration <br />
            Capture, Sync and Enrich in
            <span className="blueText"> Both Ways</span>
          </h1>
        </div>
        {/* parafgraph */}
        <div className="parab">
          <p>
            Automatically sync LinkedIn prospects to your CRM and overlay
            existing CRM contacts on <br />
            LinkedIn profiles. Complete bi-directional integration with HubSpot,
            Salesforce, and Pipedrive.
          </p>
        </div>
        <div className="scroll-container">
          <span className="side-text">Works with</span>

          <div className="scroll-box">
            <div className="scroll-inner">
              {loopItems.map((item, index) => (
                <div className="scroll-item" key={index}>
                  <img src={item.img} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <span className="side-text">& more</span>
        </div>
        {/* //5start? */}
        {/* Rating Row */}
        <div className="ratings-row">
  {/* Rating 1 */}
  <div className="rating-item">
    <div className="rating-logo-box">
      <img src="src/images/capterra-logo.png" className="rating-logo" />
    </div>

    <div className="stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n}>⭐</span>
      ))}
    </div>

    <span className="rating-value">5/5</span>
  </div>

  {/* Rating 2 */}
  <div className="rating-item">
    <div className="rating-logo-box">
      <img src="src/images/capterra-logo 1 (1).png" className="rating-logo" />
    </div>

    <div className="stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n}>⭐</span>
      ))}
    </div>

    <span className="rating-value">5/5</span>
  </div>
</div>


        {/* Buttons */}
        <div className="cta-row">
  <div className="chrome-btn">
    <div className="chrome-text">
      <span className="small-text">Available in</span>
      <span className="big-text">Chrome Web Store</span>
    </div>

    <div className="chrome-icon-wrapper">
      <img src="\src\images\chrome-logo.png" className="chrome-icon" />
    </div>
  </div>

  <div className="green-btn">Get Your Account Now!</div>
</div>

      </div>
    </>
  );
}
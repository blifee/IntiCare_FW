import React from "react";
import "./SupportedLeadCRM.css";

// Import the image so it works after build
import LdcrmImg from "../images/ldcrm.png";

export default function SupportedLeadCRM() {
  return (
    <section className="supported-section">
      {/* Heading */}
      <h2 className="supported-title">Our Supported LeadCRM</h2>
      <p className="supported-sub">
        LeadCRM provides Native Integrations with popular CRM tools to make the most out of your
        LinkedIn prospecting. We don't want you to miss any revenue opportunity on the internet!
      </p>

      {/* Image */}
      <div className="image-container">
        <img src={LdcrmImg} alt="Supported LeadCRM" className="fixed-image" />
      </div>

      {/* Button */}
      <button className="integrate-btn">Lets Integrate your CRM Now!</button>
    </section>
  );
}

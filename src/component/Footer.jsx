import React from "react";
import "./Footer.css";

// Import all images
import Logo from "../images/logo.png";
import Fb from "../images/fb.png";
import Tw from "../images/tw.png";
import Li from "../images/li.png";
import In from "../images/in.png";
import Mail from "../images/mail.png";
import Phone from "../images/phone.png";
import Help from "../images/help.png";
import ChromeBtn from "../images/Link.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <img src={Logo} alt="LeadCRM Logo" className="footer-logo" />

          <p className="footer-text">
            LeadCRM is LinkedIn integration tool for your CRM.
          </p>

          <div className="footer-socials">
            {[Fb, Tw, Li, In].map((icon, idx) => (
              <img key={idx} src={icon} alt="" />
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="footer-col">
          <h4>Integrations</h4>
          <p>HubSpot</p>
          <p>Salesforce</p>
          <p>Pipedrive</p>
          <p>
            Close.io <span className="soon">Coming Soon</span>
          </p>
          <p>
            Insightly <span className="soon">Coming Soon</span>
          </p>
        </div>

        {/* Alternatives */}
        <div className="footer-col">
          <h4>Alternative</h4>
          <p>Surfe VS LeadCRM</p>
          <p>Linkmatch Alternative</p>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>

        {/* Contact Section */}
        <div className="footer-col footer-contact">
          <h4>Contact Us</h4>

          <p className="contact-item">
            <img src={Mail} alt="" className="contact-icon" />
            support@leadcrm.io
          </p>

          <p className="contact-item">
            <img src={Phone} alt="" className="contact-icon" />
            +1 231-538-7466
          </p>

          <p className="contact-item">
            <img src={Help} alt="" className="contact-icon" />
            Help Center
          </p>

          <img src={ChromeBtn} alt="Chrome" className="chrome-btn" />
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="footer-disclaimer">
        Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
        LinkedIn(tm) logos and trademarks displayed on this tool are property of
        LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your
        own risk.
      </p>

      <p className="footer-copy">
        Copyright © 2025 LeadCRM. All Rights Reserved.
      </p>
    </footer>
  );
}

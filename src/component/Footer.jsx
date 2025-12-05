import React from "react";
import "./Footer.css";

// Import images
import Logo from "../images/Logo.png";
import FbIcon from "../images/fb.png";
import TwIcon from "../images/tw.png";
import LiIcon from "../images/li.png";
import InIcon from "../images/in.png";
import MailIcon from "../images/mail.png";
import PhoneIcon from "../images/phone.png";
import HelpIcon from "../images/help.png";
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
            <img src={FbIcon} alt="Facebook" />
            <img src={TwIcon} alt="Twitter" />
            <img src={LiIcon} alt="LinkedIn" />
            <img src={InIcon} alt="Instagram" />
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
            <img src={MailIcon} alt="Mail" className="contact-icon" />
            support@leadcrm.io
          </p>

          <p className="contact-item">
            <img src={PhoneIcon} alt="Phone" className="contact-icon" />
            +1 231-538-7466
          </p>

          <p className="contact-item">
            <img src={HelpIcon} alt="Help" className="contact-icon" />
            Help Center
          </p>

          <img
            src={ChromeBtn}
            alt="Chrome"
            className="chrome-btn2"
          />
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

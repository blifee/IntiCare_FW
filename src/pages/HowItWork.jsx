import React from "react";
import "./HowItWork.css";

// IMPORT IMAGES
import Step1Img from "../images/Private/11.png";
import Step2Img from "../images/Private/22.png";
import Step3Img from "../images/Private/33.png";
import Step4Img from "../images/Private/44.png";
import BackgroundImg from "../images/BBBB.png"; // for background 

export default function HowItWork() {
  const steps = [
    {
      number: "1",
      title: "Install the Extension",
      text: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      img: Step1Img,
    },
    {
      number: "2",
      title: "Browse LinkedIn",
      text: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      img: Step2Img,
    },
    {
      number: "3",
      title: "Get Enriched Data",
      text: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      img: Step3Img,
    },
    {
      number: "4",
      title: "Sync to CRM Instantly",
      text: "Prospect data syncs to your CRM instantly with history, tracking, and AI-powered insights.",
      img: Step4Img,
    },
  ];

  return (
    <div className="how-wrapper">
      <h2 className="how-title">How it Works</h2>
      <p className="how-sub">
        From setup to success in <strong>4 simple steps</strong>
      </p>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.number} className="step-card">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-text">{step.text}</p>
            <img src={step.img} className="step-img" alt={step.title} />
          </div>
        ))}
      </div>

      <button className="cta-btn">Try LeadCRM Now</button>
    </div>
  );
}

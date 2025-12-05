import "../pages/ScrollFeature.css";

// IMPORT IMAGES
import ContactImg from "../images/contact.png";
import HAImg from "../images/ha.png";
import ADImg from "../images/ad.png";
import WFImg from "../images/wf.png";

export default function ScrollFeature() {
  const features = [
    { icon: ContactImg, text: <>Access to <span>700M+ Contacts</span></> },
    { icon: HAImg, text: <><span>One click push</span> to CRM</> },
    { icon: ADImg, text: <><span>Custom Field</span> Mapping</> },
    { icon: WFImg, text: <>Advanced <span>Waterfall Enrichment</span></> },
  ];

  // duplicate array for infinite scroll
  const loopedFeatures = [...features, ...features];

  return (
    <div className="features-slider">
      <div className="slider-track">
        {loopedFeatures.map((feature, index) => (
          <div className="feature-item" key={index}>
            <img src={feature.icon} className="feature-icon" alt="" />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "../pages//Testomonials.css";
import { Star } from "lucide-react";

// Avatar images
import da from "../images/da.png";
import lil from "../images/lil.png";
import ris from "../images/ris.png";

// Arrow icon
import arrow from "../images/ar.png";

export default function Testimonials() {
  const data = [
    {
      text: `“Reliable Data Sync I’ve only had to refresh the extension a couple of times. 
      The multi-contact enrichment is still a huge plus, and support is very responsive.“`,
      name: "David Fincher",
      platform: "On Capterra",
      avatar: da,
    },
    {
      text: `“Keeps Me Organized! I never lose track of a lead now that I can see and 
      create tasks right in LinkedIn. The inbuilt enrichment is excellent, and when it 
      misses anything, integrations fill in the gaps.”`,
      name: "Paul Kevin",
      platform: "On Google",
      avatar: lil,
    },
    {
      text: `“Hunter.io Integration is Great! I love that LeadCRM uses multiple sources. 
      If one source doesn’t have the data, the next source does. Message templates help me 
      send quick, consistent messages.”`,
      name: "Ruthie Smith",
      platform: "On G2",
      avatar: ris,
    },
  ];

  return (
    <div className="testimonials-container">
      <h2 className="heading">What people are saying about LeadCRM</h2>

      <div className="testimonials-grid">
        {data.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">{item.text}</p>

            {/* Arrow + Stars */}
            <div className="stars">
              <img src={arrow} alt="arrow" className="rating-arrow" />

              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="star-icon" />
              ))}
            </div>
            <div>
              <img src="" alt="" srcset="" />
            </div>

            <div className="user-info">
              <div>
                <p className="user-name">{item.name}</p>
                <p className="user-platform">{item.platform}</p>
              </div>

              <img src={item.avatar} alt="avatar" className="avatar" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import "./LeadCRMSection.css";

// IMPORT IMAGES
import LDImg from "../images/ld.png";
import CRMImg from "../images/crm.png";
import Icon1 from "../images/1.png";
import Icon2 from "../images/2.png";
import Icon3 from "../images/3.png";
import Icon4 from "../images/4.png";
import ArrowImg from "../images/arara.png";

export default function LeadCRMSection() {
  return (
    <div className="leadcrm-wrapper">

      <h2 className="section-heading">
        Every LinkedIn Prospector faces these daily challenges
      </h2>

      <div className="comparison-container">

        {/* LEFT BOX */}
        <div className="card left-card">
          <img src={LDImg} className="card-img" alt="Without LeadCRM" />

          <h3 className="card-title-red">Without LeadCRM</h3>

          <ul className="card-list">
            <li>
              <span className="cross">✘</span>
              Manual Data Entry 
              <span className="tag red-tag">3+ Hours wasted daily</span>
            </li>
            <p>Copying LinkedIn contacts to CRM manually plus losing conversation history</p>

            <li>
              <span className="cross">✘</span>
              Incomplete Data
              <span className="tag red-tag">60% Data Incomplete</span>
            </li>
            <p>LinkedIn profiles missing Email and Phones from 700M+ Database</p>

            <li>
              <span className="cross">✘</span>
              No CRM Visibility
              <span className="tag red-tag">Zero context available</span>
            </li>
            <p>Can’t see existing CRM contacts when browsing LinkedIn profiles</p>

            <li>
              <span className="cross">✘</span>
              Limited Productivity
              <span className="tag red-tag">No smart assistance</span>
            </li>
            <p>Writing messages manually plus no AI assistant for reply, Invite or comments.</p>
          </ul>
        </div>

        {/* CENTER DIVIDER */}
        <div className="divider-wrapper">
          <div className="divider-line"></div>
          <span className="vs">VS</span>
        </div>

        {/* RIGHT BOX */}
        <div className="card right-card">
          <img src={CRMImg} className="card-img" alt="With LeadCRM" />

          <h3 className="card-title-green">
            With LeadCRM <span className="green-tag">4+ Hours/day Saved</span>
          </h3>

          <ul className="card-list">
            <li>
              <img src={Icon1} className="icon" alt="" />
              Complete Bi-Directional Sync  
            </li>
            <p>Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.</p>

            <li>
              <img src={Icon2} className="icon" alt="" />
              700M+ Contacts + Enrichment
            </li>
            <p>Get verified emails and phone numbers from a vast global database.</p>

            <li>
              <img src={Icon3} className="icon" alt="" />
              CRM Overlay on LinkedIn
            </li>
            <p>See full CRM insights directly on LinkedIn profiles without switching tabs.</p>

            <li>
              <img src={Icon4} className="icon" alt="" />
              AI Response + Templates + Bulk Exports
            </li>
            <p>Save time with AI-crafted replies, pre-built templates, and one-click data exports.</p>
          </ul>
        </div>

      </div>

      {/* CTA */}
      <div className="cta-box">
        <button className="cta-btn">Start Using LeadCRM Now</button>
        <img className="arrow" src={ArrowImg} alt="Arrow" />
      </div>
    </div>
  );
}

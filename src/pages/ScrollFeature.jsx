import "../pages/ScrollFeature.css"; 
export default function ScrollFeature() {
  return (
    <div className="features-slider">
  <div className="slider-track">

    <div className="feature-item">
      <img src="\src\images\contact.png" className="feature-icon" />
      <p>Access to <span>700M+ Contacts</span></p>
    </div>

    <div className="feature-item">
      <img src="\src\images\ha.png" className="feature-icon" />
      <p><span>One click push</span> to CRM</p>
    </div>

    <div className="feature-item">
      <img src="\src\images\ad.png" className="feature-icon" />
      <p><span>Custom Field</span> Mapping</p>
    </div>

    <div className="feature-item">
      <img src="\src\images\wf.png" className="feature-icon" />
      <p>Advanced <span>Waterfall Enrichment</span></p>
    </div>

    {/* duplicate items for infinite loop */}
    <div className="feature-item">
      <img src="\src\images\contact.png" className="feature-icon" />
      <p>Access to <span>700M+ Contacts</span></p>
    </div>

    <div className="feature-item">
      <img src="\src\images\ha.png" className="feature-icon" />
      <p><span>One click push</span> to CRM</p>
    </div>

    <div className="feature-item">
      <img src="\src\images\ad.png" className="feature-icon" />
      <p><span>Custom Field</span> Mapping</p>
    </div>

    <div className="feature-item">
      <img src="\src\images\wf.png" className="feature-icon" />
      <p>Advanced <span>Waterfall Enrichment</span></p>
    </div>

  </div>
</div>

  );
}

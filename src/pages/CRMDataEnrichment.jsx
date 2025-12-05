import React, { useState } from "react";
import "./CRMDataEnrichment.css";
import {
  Database,
  RefreshCw,
  FileText,
  Brain,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
} from "lucide-react";

// Vendor Logos
import dgLogo from "../images/dg.png";
import db from "../images/db.png";
import rc from "../images/rocket.png";
import sh from "../images/shh.png";

// Arrow Image
import arrow from "../images/arr.png";

// Small UI images used inside left panel
import profileImg from "../images/imag.png";
import validImg from "../images/valid.png";
import zzbImg from "../images/zzb.png";
import frameImg from "../images/Frrame.png";
import hdImg from "../images/hd.png";

export default function CRMDataEnrichment() {
  const [activeTab, setActiveTab] = useState("enrichment");

  const tabs = [
    { id: "enrichment", label: "CRM Data Enrichment", icon: Database },
    { id: "sync", label: "CRM Data Sync", icon: RefreshCw },
    { id: "export", label: "Bulk Export & Enrichment", icon: FileText },
    { id: "ai", label: "AI Productivity", icon: Brain },
  ];

  // WATERFALL DATA
  const waterfall = [
    { id: 1, name: "DropContact", logo: dgLogo, found: false },
    { id: 2, name: "Datagma", logo: db, found: false },
    { id: 3, name: "Rocket Reach", logo: rc, found: false },
    { id: 4, name: "Signal Hire", logo: sh, found: true },
  ];

  return (
    <div className="crm-container">
      <h2 className="heading">Complete LinkedIn Sales Solutions</h2>
      <p className="h2">
        Everything you need for professional LinkedIn prospecting
      </p>
      {/* Tabs */}
      <div className="tabs-container">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={18} /> <span className="tab-label">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Conditional content */}
      {activeTab === "enrichment" && (
        <>
          <p className="problem-text">
            It’s hard to find accurate contact data.
            <span className="incomplete-badge">Incomplete Data</span>
          </p>

          <div className="main-grid">
            {/* LEFT PANEL */}
            <div className="panel panel-left">
              <h2 className="panel-title">
                Here is how LeadCRM tackles that situation.
              </h2>

              <a href="#" className="panel-link">
                Try LeadCRM Data Enrichment →
              </a>

              <h3 className="section-title">Verified Email & Phone</h3>

              <div className="left-cards-row">
                {/* CONTACT CARD */}
                <div className="contact-card">
                  <div className="card-top">
                    <Mail size={20} color="#4a90e2" />
                    <span className="card-top-text">
                      Verified Email & Phone
                    </span>
                  </div>

                  <div className="contact-header">
                    <img
                      src={profileImg}
                      className="profile-img"
                      alt="profile"
                    />
                    <div className="verification-badges">
                      <div className="badge badge-valid">
                        <img src={validImg} alt="valid" />
                      </div>
                      <div className="badge badge-zb">
                        <img src={zzbImg} alt="zzb" />
                      </div>
                    </div>
                  </div>

                  <h3 className="contact-name">David Steinhoff</h3>

                  <div className="info-block">
                    <div className="info-row">
                      <Mail size={16} />
                      <span className="info-text">
                        davidsteinhoff@gmail.com
                      </span>
                      <CheckCircle size={16} color="#00b894" />
                    </div>
                    <p className="info-source">Found via snov.io ⚙</p>
                  </div>

                  <div className="info-block">
                    <div className="info-row">
                      <Phone size={16} />
                      <span className="info-text">+1 932 xxx xxx</span>
                      <CheckCircle size={16} color="#00b894" />
                    </div>
                    <p className="info-source">Found via snov.io ⚙</p>
                  </div>

                  <button className="contacts-found-btn">
                    <CheckCircle size={18} /> Contacts Found
                  </button>
                </div>

                {/* FILTER CARD */}
                <div className="filters-card">
                  <div className="filter-header">
                    <img src={frameImg} width="28" alt="frame" />
                    <span className="filter-title">40+ Search Filters</span>
                  </div>

                  <img src={hdImg} alt="example" className="filters-example" />
                </div>
              </div>
            </div>

            {/* RIGHT PANEL – WATERFALL */}
            <div className="panel panel-right">
              <h2 className="panel-title">
                If it does not works for you ! try our Advanced Waterfall
                Enrichment
              </h2>

              <a href="#" className="panel-link">
                Try Our Advanced Waterfall Enrichment →
              </a>

              <div className="waterfall-stepped">
                {waterfall.map((item, index) => (
                  <div key={item.id} className="waterfall-step">
                    <div
                      className="vendor-label-new"
                      style={{ marginLeft: `${index * 40}px` }}
                    >
                      Vendor {index + 1}
                    </div>

                    <div
                      className="vendor-card-new"
                      style={{ marginLeft: `${index * 40}px` }}
                    >
                      <div className="vendor-left">
                        <img
                          src={item.logo}
                          className="vendor-logo-img-new"
                          alt={item.name}
                        />
                        <span className="vendor-name-new">{item.name}</span>
                      </div>

                      {!item.found ? (
                        <div className="vendor-status-new">
                          <XCircle size={18} color="#d9534f" />
                          <span>Contacts Not Found</span>
                        </div>
                      ) : (
                        <div className="vendor-icons">
                          <Phone size={18} />
                          <CheckCircle size={18} />
                          <Mail size={18} />
                        </div>
                      )}
                    </div>

                    {index < waterfall.length - 1 && (
                      <img
                        src={arrow}
                        className="vendor-arrow-new"
                        style={{ marginLeft: `${index * 40 + 135}px` }}
                        alt="arrow"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* CRM Data Sync tab */}
      {activeTab === "sync" && (
        <div className="tab-content-box">
          <p className="problem-text">
            40+ hours lost to copy-paste. Every. Single. Month..
            <span className="incomplete-badge">Lost Lead Context</span>
          </p>

          <div className="sync-grid">
            <div className="sync-card">
              <h3>The Solution? LeadCRM's Instant Data Sync.</h3>
              <p className="muted">
                Sync profile details to your CRM in real-time when you visit a
                LinkedIn profile.
              </p>

              <div className="sync-demo">
                <div className="sync-left-demo">
                  {/* placeholder image area */}
                  <div className="mock-image">Profile Overlay</div>
                </div>
                <div className="sync-arrow">
                  <div className="circle-sync">↻</div>
                </div>
                <div className="sync-right-demo">
                  <div className="mock-image">CRM Contact</div>
                </div>
              </div>
              <a href="#" className="panel-link">
                Try LeadCRM Data Sync →
              </a>
            </div>

            <div className="sync-card">
              <h3>Unlock instant CRM insights</h3>
              <p className="muted">
                See CRM context for every profile you visit.
              </p>
              <div className="mock-image wide">Data Overlay Preview</div>
              <a href="#" className="panel-link">
                Try LeadCRM Data Overlay →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Export & Enrichment tab */}
      {activeTab === "export" && (
        <div className="tab-content-box">
          <p className="problem-text">
            Your Sales Navigator Workflow is Broken.
            <span className="incomplete-badge">Lost Productivity</span>
          </p>

          <div className="export-grid">
            <div className="export-card">
              <h3>Enrich & Export 250 Profiles in Just 60 Seconds.</h3>
              <p className="muted">
                Upload CSV or bulk export to HubSpot / G-Sheet.
              </p>
              <div className="mock-image">Sales Navigator Export</div>
              <a href="#" className="panel-link">
                Try LeadCRM Bulk Export →
              </a>
            </div>

            <div className="export-card">
              <h3>Export & enrich profiles to the CRM or G-Sheet</h3>
              <p className="muted">Fast mapping and field sync.</p>
              <div className="mock-image wide">Excel Preview</div>
              <a href="#" className="panel-link">
                Try LeadCRM Bulk Export →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* AI Productivity tab */}
      {activeTab === "ai" && (
        <div className="tab-content-box">
          <p className="problem-text">
            Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.
            <span className="incomplete-badge">No Smart Assistance</span>
          </p>

          <div className="ai-grid">
            <div className="ai-card">
              <h3>Get the same high-impact engagement in 80% less time.</h3>
              <p className="muted">Try LeadCRM AI Response</p>
              <div className="mock-image">AI Comment Modal</div>
            </div>

            <div className="ai-card">
              <h3>Use Shortcuts to reply faster.</h3>
              <p className="muted">Try LeadCRM Templates</p>
              <div className="mock-image">Message Template Preview</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

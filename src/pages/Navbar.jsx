import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="nav">

      {/* Left Logo */}
      <div className="nav-left">
        <img
          src="\src\images\Logo.png"
          className="logo"
          alt=""
        />
        <span className="brand-text">
            <img src="" alt="" />
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-menu desktop-only">

        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("product")}
          onMouseLeave={() => toggleDropdown(null)}
        >
          Product <ChevronDown size={16} />
          {openDropdown === "product" && (
            <div className="dropdown">
              <a href="#">LinkedIn Extension</a>
              <a href="#">Lead Finder</a>
              <a href="#">Deal Management</a>
              <a href="#">Waterfall Enrichment</a>
            </div>
          )}
        </li>

        <li className="nav-item">Pricing</li>

        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("resources")}
          onMouseLeave={() => toggleDropdown(null)}
        >
          Resources <ChevronDown size={16} />
          {openDropdown === "resources" && (
            <div className="dropdown">
              <a href="#">Blog</a>
              <a href="#">Tutorials</a>
              <a href="#">Docs</a>
            </div>
          )}
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("company")}
          onMouseLeave={() => toggleDropdown(null)}
        >
          Company <ChevronDown size={16} />
          {openDropdown === "company" && (
            <div className="dropdown">
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          )}
        </li>
      </ul>

      {/* Right Buttons */}
      <div className="nav-right desktop-only">
        <button className="btn-primary">Get your free account</button>
        <button className="btn-outline">
          <LogIn size={18} /> Login
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="mobile-only">
        <Menu size={32} onClick={() => setMobileOpen(true)} />
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>

        {/* FIXED CLOSE BUTTON INSIDE DRAWER */}
        <button className="close-btn" onClick={closeMobileMenu}>
          <X size={28} />
        </button>

        <ul className="mobile-list">

          <li onClick={() => toggleDropdown("m-product")}>
            Product <ChevronDown size={16} />
          </li>
          {openDropdown === "m-product" && (
            <div className="mobile-dropdown">
              <a href="#" onClick={closeMobileMenu}>LinkedIn Extension</a>
              <a href="#" onClick={closeMobileMenu}>Lead Finder</a>
              <a href="#" onClick={closeMobileMenu}>Deal Management</a>
              <a href="#" onClick={closeMobileMenu}>Waterfall Enrichment</a>
            </div>
          )}

          <li onClick={closeMobileMenu}>Pricing</li>

          <li onClick={() => toggleDropdown("m-resources")}>
            Resources <ChevronDown size={16} />
          </li>
          {openDropdown === "m-resources" && (
            <div className="mobile-dropdown">
              <a href="#" onClick={closeMobileMenu}>Blog</a>
              <a href="#" onClick={closeMobileMenu}>Tutorials</a>
              <a href="#" onClick={closeMobileMenu}>Docs</a>
            </div>
          )}

          <li onClick={() => toggleDropdown("m-company")}>
            Company <ChevronDown size={16} />
          </li>
          {openDropdown === "m-company" && (
            <div className="mobile-dropdown">
              <a href="#" onClick={closeMobileMenu}>About Us</a>
              <a href="#" onClick={closeMobileMenu}>Careers</a>
              <a href="#" onClick={closeMobileMenu}>Contact</a>
            </div>
          )}

          <button className="btn-primary mobile-btn" onClick={closeMobileMenu}>
            Get your free account
          </button>

          <button className="btn-outline mobile-btn" onClick={closeMobileMenu}>
            <LogIn size={18} /> Login
          </button>
        </ul>
      </div>
    </nav>
  );
}

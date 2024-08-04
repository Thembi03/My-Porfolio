// src/components/header.js.

// src/components/Header.js

import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <a href="#home">TS</a>
      </div>
      <nav aria-label="Main Navigation" className="navbar">
        <ul className="nav-links">
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>

    </div>
  );
};

export default Header;

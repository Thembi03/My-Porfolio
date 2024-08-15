import React, { useState } from "react";
import "./header.css";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="logo">
        <a href="#home">TS</a>
      </div>
      <nav aria-label="Main Navigation" className="navbar">
        {/* Regular Navigation Links for Larger Screens */}
        <ul className="nav-links">
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>

        {/* Burger Menu for Smaller Screens */}
        <Menu 
          isOpen={menuOpen}
          onStateChange={(state) => handleStateChange(state)} 
          right 
        >          
          <a onClick={closeMenu} href="#Home">Home</a>
          <a onClick={closeMenu} href="#About">About</a>
          <a onClick={closeMenu} href="#Projects">Projects</a>
          <a onClick={closeMenu} href="#Skills">Skills</a>
          <a onClick={closeMenu} href="#Contact">Contact</a>
        </Menu>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <img src="/images/troll-face.png" alt="Logo" className="header-img" />
      <h2 className="header-text">Meme Generator</h2>
      <h3 className="header-course">React Course - Project 3</h3>
    </div>
  );
}

export default Header;

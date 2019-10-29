import React from 'react';
import logo from './../images/pic.jpg';

function Header() {
  return (
    <div className="header">
      <div className="header-bar">
        <div>
          <a href="/">Tyler James Greve</a>
        </div>
        <div className="header-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#form">Contact</a>
        </div>
      </div>
      <div className="header-content">
        <div className="header-intro">
          <h1>Welcome!</h1>
          <h2>I'm Tyler, a Front End Engineer working in React in San Francisco.</h2>
          <a className="header-btn" href="#form">
            Hire Me
          </a>
        </div>
        <div className="header-img">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;

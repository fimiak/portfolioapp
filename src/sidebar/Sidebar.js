import React from 'react';
import logo from './../images/pic.jpg';
import email from './../images/at-sign.svg';
import linkedin from './../images/linkedin.svg';
import github from './../images/github.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="app-title">Tyler James Greve</h1>
        <span className="app-subtitle">Front End Engineer &mdash; React/Redux</span>
        <div className="sidebar-links">
          <a href="https://www.linkedin.com/in/tylerjamesgreve/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="mailto:tylerjamesgreve@gmail.com">
            <img src={email} alt="email" />
          </a>
          <a href="https://github.com/fimiak">
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
      <div className="sidebar-footer">
        <span className="year">2018</span>
      </div>
    </div>
  );
}

export default Sidebar;

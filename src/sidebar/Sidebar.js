import React from 'react';
import logo from './../images/pic.jpg';

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="app-title">Tyler James Greve</h1>
      <div className="sidebar-links">
        <a href="http://linkedin.com">LinkedIn</a>
        <a href="http://github.com">Github</a>
        <p>2018</p>
      </div>
    </div>
  );
}

export default Sidebar;

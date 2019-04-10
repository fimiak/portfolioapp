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
        <h1>Tyler James Greve</h1>
        <span>Front End Engineer</span>
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
      <div className="intro">
        <h3>
          I am a Front End Engineer in San Francisco, CA. I enjoy creating mobile and desktop React based applications.
          I am open to learning any new web technology to get the job done.
        </h3>
        <div className="skills">
          <ul>
            <li>
              <h3>Web Development</h3>
            </li>
            <li>HTML</li>
            <li>CSS / SASS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Node/Express</li>
            <li>Git/Github</li>
            <li>Wordpress</li>
          </ul>
          <ul>
            <li>
              <h3>Web Design</h3>
            </li>
            <li>D3.js</li>
            <li>Sketch</li>
            <li>Affinity Designer</li>
            <li>Adobe CC</li>
            <li>User Interface Design</li>
            <li>Photography</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

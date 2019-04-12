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
        <p>
          I am a Front End Engineer in San Francisco, CA. I enjoy creating mobile and desktop React-based applications.
          I am open to learning any new web technology to get the job done.
        </p>
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
              <h3>Web Design Tools</h3>
            </li>
            <li>D3.js</li>
            <li>Sketch</li>
            <li>Affinity Designer</li>
            <li>Adobe CC</li>
            <li>User Interface Design</li>
            <li>Photography</li>
          </ul>
        </div>
        <div className="history">
          <h3>Education</h3>
          <p>A mix of CS classes and Self-taught - Front End Engineering</p>
          <p>New York University - Class of 2012 - MS Political Science</p>
          <p>Central Michigan University - Class of 2008 - BS Political Science</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

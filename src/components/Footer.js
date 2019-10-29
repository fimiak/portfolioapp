import React from 'react';
import email from './../images/at-sign.svg';
import linkedin from './../images/linkedin.svg';
import github from './../images/github.svg';

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-text">
          <a href="/">Tyler James Greve</a>
          <p>&copy; 2019 * Thanks for visiting!</p>
        </div>
        <ul className="footer-links">
          <li>
            <a href="https://www.linkedin.com/in/tylerjamesgreve/">
              <img className="footer-linkedin" src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="mailto:tylerjamesgreve@gmail.com">
              <img src={email} alt="email" />
            </a>
          </li>
          <li>
            <a href="https://github.com/fimiak">
              <img src={github} alt="github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

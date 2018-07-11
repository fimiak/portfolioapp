import React from 'react';
import Project from './Project';
import data from './../data/Data.json';

function Content() {
  return (
    <div className="content">
      <div className="intro">
        <p>
          I am a Front End Engineer specializing in ReactJS. I enjoy creating mobile and desktop React-based
          applications in San Francisco, California.
        </p>
        <div className="skills">
          <ul>
            <li>
              <h3>Web Development</h3>
            </li>
            <li>HTML</li>
            <li>CSS / SASS</li>
            <li>Javascript / ES6</li>
            <li>ReactJS</li>
            <li>Wordpress</li>
          </ul>
          <ul>
            <li>
              <h3>Web Design</h3>
            </li>
            <li>Sketch</li>
            <li>Affinity Designer</li>
            <li>Adobe CC</li>
            <li>User Interface Design</li>
            <li>Photography</li>
          </ul>
        </div>
      </div>
      <div className="topmargin" />
      <Project bg="bg-one" data={data[0]} />
      <Project bg="bg-two" data={data[1]} />
      <Project bg="bg-three" data={data[2]} />
      <Project bg="bg-four" data={data[3]} />
      <Project bg="bg-five" data={data[4]} />
      <Project bg="bg-six" data={data[5]} />
      <div className="history">
        <h2>Education</h2>
        <p>New York University - Class of 2012 - MS Global Affairs</p>
        <p>Central Michigan University - Class of 2008 - BS Political Science</p>
      </div>
    </div>
  );
}

export default Content;

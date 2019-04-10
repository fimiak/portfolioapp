import React from 'react';
import Project from './Project';
import data from './../data/Data.json';

function Content() {
  return (
    <div className="content">
      <div className="topmargin" />
      <Project bg="bg-one" data={data[0]} />
      <Project bg="bg-two" data={data[2]} />
      <Project bg="bg-three" data={data[1]} />
      <Project bg="bg-four" data={data[3]} />
      <Project bg="bg-five" data={data[4]} />
      <Project bg="bg-six" data={data[5]} />
      <div className="history">
        <h2>Education</h2>
        <p>Self-taught - Web Development</p>
        <p>New York University - Class of 2012 - MS Political Science</p>
        <p>Central Michigan University - Class of 2008 - BS Political Science</p>
      </div>
    </div>
  );
}

export default Content;

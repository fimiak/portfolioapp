import React from 'react';
import Project from './Project';
import data from './../data/Data.json';

function Content() {
  return (
    <div className="content">
      <div className="topmargin" />
      <Project data={data[0]} />
      <Project data={data[1]} />
      <Project data={data[2]} />
      <Project data={data[3]} />
      <Project data={data[4]} />
      <Project data={data[5]} />
      <Project data={data[6]} />
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

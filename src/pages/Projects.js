import React from 'react';
import Project from './Project';
import data from './../data/Data.json';

function Content() {
  return (
    <div className="content">
      <h1>Projects</h1>
      <ul className="content__box">
        <Project data={data[0]} />
        <Project data={data[1]} />
        <Project data={data[2]} />
        <Project data={data[3]} />
        <Project data={data[4]} />
        <Project data={data[5]} />
        <Project data={data[6]} />
        <Project data={data[7]} />
      </ul>
    </div>
  );
}

export default Content;

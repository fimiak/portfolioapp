import React from 'react';
import Project from './Project';
import data from './../data/Data.json';

function Content() {
  return (
    <div className="content">
      <div>
        <h3>Projects</h3>
      </div>
      <div className="content__box">
        <Project data={data[0]} />
        <Project data={data[1]} />
        <Project data={data[2]} />
        <Project data={data[3]} />
        <Project data={data[4]} />
        <Project data={data[5]} />
        <Project data={data[6]} />
      </div>
    </div>
  );
}

export default Content;

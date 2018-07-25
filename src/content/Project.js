import React from 'react';

function Project(props) {
  return (
    <div className={'block ' + props.bg}>
      <div className={'block--img'}>
        <img className="content-image" src={require(`.././images/${props.data.image}`)} alt="ionstate" />
      </div>
      <ul>
        <li>
          <h2>{props.data.name}</h2>
        </li>
        <li className="project-stack">{props.data.stack}</li>
        <li className="project-url">
          <a href={props.data.url}>{props.data.url}</a>
        </li>
      </ul>
    </div>
  );
}

export default Project;

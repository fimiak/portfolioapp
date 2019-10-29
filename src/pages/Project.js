import React from 'react';

function Project(props) {
  return (
    <div className="block">
      <div className="block__img">
        <img className="content__image" src={require(`.././images/${props.data.image}`)} alt="ionstate" />
      </div>

      <div className="block__text">
        <h3>{props.data.name}</h3>
        <p className="project__stack">{props.data.description}</p>
        <span className="project__stack">{props.data.stack}</span>
        <a className="project__url" href={props.data.url}>
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;

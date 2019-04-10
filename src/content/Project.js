import React from 'react';

function Project(props) {
  return (
    <div className={'block ' + props.bg}>
      <div className={'block__img'}>
        <img className="content__image" src={require(`.././images/${props.data.image}`)} alt="ionstate" />
      </div>

      <div className="block__text">
        <h3>{props.data.name}</h3>

        <h3 className="project__stack">{props.data.stack}</h3>
        <a className="project__url" href={props.data.url}>
          {props.data.url}
        </a>
      </div>
    </div>
  );
}

export default Project;

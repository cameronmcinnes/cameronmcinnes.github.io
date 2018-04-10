import React from 'react';

const ProjectIndexItem = ({projectTitle, imageUrl}) => {
  return (
    <a>
      <div className='project-item-container'
        style={ { backgroundImage: `url(${imageUrl})` } }>
        <h2 className='project-title'>{ projectTitle }</h2>
      </div>
    </a>
  )
}

export default ProjectIndexItem;

import React from 'react';

const ProjectIndexItem = ({projectTitle, imageUrl}) => {
  return (
    <div className='project-item-container'>
      <div className='project-item-image'
        style={ { backgroundImage: `url(${imageUrl})` } }>
        <a>
          <div className='project-item-overlay'></div>
        </a>
      </div>
      <h2 className='project-title'>{ projectTitle }</h2>
      <div className='bottom-bar'></div>
    </div>
  )
}

export default ProjectIndexItem;

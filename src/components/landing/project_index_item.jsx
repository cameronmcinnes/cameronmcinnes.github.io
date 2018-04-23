import React from 'react';

import { Link } from 'react-router-dom';

const ProjectIndexItem = (props) => {
  const {projectTitle, projLink, imageUrl, liveLink, repoLink} = props

  return (
    <div className='project-item-container'>
      <div className='project-item-image'
        style={ { backgroundImage: `url(${imageUrl})` } }>
        <Link to={`/projects/${projLink}`}>
          <div className='project-item-overlay'></div>
        </Link>
      </div>
      <div className='project-info'>
        <h2 className='project-title'>{ projectTitle }</h2>
        <nav>
          { liveLink && <a href={liveLink}>Live</a> } &nbsp;&nbsp;
          <a href={repoLink}>Repo</a>
        </nav>
      </div>
      <div className='bottom-bar'></div>
    </div>
  )
}

export default ProjectIndexItem;

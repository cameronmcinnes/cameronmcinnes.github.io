import React from 'react';

import style from '../project_index.scss';
import ProjectIndexItem from './project_index_item';

const ProjectIndex = () => {
  return (
    <section className='project-index'>
      <ProjectIndexItem
        projectTitle='Play MTA'
        imageUrl='assets/play_mta.png'/>
      <ProjectIndexItem
        projectTitle='bandland'
        imageUrl='assets/bandland_landing.png'/>
      <ProjectIndexItem
        projectTitle='GoRM'
        imageUrl='assets/gorm.png'/>
    </section>
  );
}

export default ProjectIndex;

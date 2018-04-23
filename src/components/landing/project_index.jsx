import React from 'react';

// import style from '../project_index.scss';
import style from '../../stylesheets/project_grid.scss';
import ProjectIndexItem from './project_index_item';

const ProjectIndex = () => {
  return (
    <section className='project-index'>
      <ProjectIndexItem
        projectTitle='bandland'
        projLink='bandland'
        liveLink='http://www.crm-bandland.com/'
        repoLink='https://github.com/cameronmcinnes/bandland'
        imageUrl='assets/bandland_comp.png'/>
      <ProjectIndexItem
        projectTitle='Play MTA'
        projLink='playmta'
        liveLink='https://cameronmcinnes.github.io/play-mta/'
        repoLink='https://github.com/cameronmcinnes/playmta'
        imageUrl='assets/play_mta.png'/>
      <ProjectIndexItem
        projectTitle='GoRM'
        projLink='gorm'
        repoLink='https://github.com/cameronmcinnes/GoRM'
        imageUrl='assets/gorm.png'/>
    </section>
  );
}

export default ProjectIndex;

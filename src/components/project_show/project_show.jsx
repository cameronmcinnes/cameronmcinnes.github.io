import React from 'react';

import { withRouter } from 'react-router-dom';

import style from '../../stylesheets/project_show.scss';

const logoUrls = {
  'playmta': 'assets/play_mta_updated_logo.svg',
  'bandland': 'assets/bandland_main_logo.svg'
}

const liveUrls = {
  'playmta': 'https://cameronmcinnes.github.io/play-mta/',
  'bandland': 'http://www.crm-bandland.com/'
}

const repoUrls = {
  'bandland': 'https://github.com/cameronmcinnes/bandland',
  'playmta': 'https://github.com/cameronmcinnes/playmta',
  'gorm': 'https://github.com/cameronmcinnes/GoRM'
}

const firstP = {
  'playmta': (
    <p className='p-1'>
      In 2011 Alexander Chen, creative director at Google Creative Lab,
      asked the question: what if we could make music out of a subway map?
      Chen took a simplified version of the NYC subway map and animated
      the trains according to real train schedules.
    </p>
  ),
  'bandland': (
    <p className='p-1'>
      Bandland is a fullstack web app inspired by bandcamp. The project
      makes use of React and Redux on the frontend with a Ruby on Rails
      and PostgreSQL backend.
    </p>
  ),
  'gorm': (
    <p className='p-1'>
      GoRM connects classes to relational database tables to establish
      an almost zero-configuration persistence layer for applications.
      The core of the library is the SQLObject class that maps between
      a child class and a database table. These classes function as
      model in the MVC design pattern. GoRM leverages the module pattern
      to keep code dry and extends querying, validation, and association
      functionality to models.
    </p>
  )
}

const secondP = {
  'playmta': (
    <p className='p-2'>
      Play MTA runs with the idea of the New York Subway map as music.
      Using Vanilla JavaScript, the Web Audio API, and the Canvas API,
      Play MTA allows users to play the subway map like an instrument.
      Users can dispatch trains all at once, or by line, can zoom and pan,
      and can select, clear and mute trains. The trains run at accurate
      speeds relative to one another. When they arrive at stations,
      trains play notes that are determined by the subway line.
    </p>
  ),
  'bandland': (
    <p className='p-2'>
      Bandland allows users to create profiles, to create, upload, tag,
      and collect albums, and to search and follow other users. The app includes
      features like a live debounced AJAX search and a discover by tags component.
      Bandland uses Amazon Web Services S3 to store image and track uploads from
      users.
    </p>
  ),
  'gorm': (
    <p className='p-2'>
      GoRM values convention over configuration and makes use of
      metaprogramming to intelligently generate method names. GoRM allows
      customization of names but is most powerful when used in conjunction
      with strong naming conventions.
    </p>
  )
}

const titles = {
  'playmta': 'Play MTA',
  'gorm': 'GoRM'
}

const subtitles = {
  'playmta': 'A musical animated subway map',
  'bandland': 'A full stack music app',
  'gorm': 'Lightweight Ruby ORM'
}

const images = {
  'playmta': 'https://i.imgur.com/rV9yn0L.png',
  'bandland': 'assets/bandland_landing.png'
}


const ProjectShow = ({match}) => {
  const title = match.params.projectName;
  const link = (liveUrls[title]) ? liveUrls[title] : repoUrls[title]


  return (
    <section className='project-show'>
      <a className='proj-header' href={ link }>
        <section>
          <img className='logo-img' src={ logoUrls[title] } />
          <h2 className='proj-title'>{ titles[title] }</h2>
        </section>
      </a>

      <article className='description'>
        <h3>{ subtitles[title] }</h3>
        <nav>
          { liveUrls[title] && <a href={ liveUrls[title] }>Live</a> }
          { <a href={ repoUrls[title] }>Repo</a> }
        </nav>
        { firstP[title] }
        { secondP[title] }
      </article>

      <img className='big-img' src ={ images[title] }/>

    </section>
  )
}

export default withRouter(ProjectShow);

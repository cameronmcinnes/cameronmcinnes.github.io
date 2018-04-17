import React from 'react';

import style from '../stylesheets/header.scss';

const Header = () => {
  return (
    <header className='main-header'>
      <div className='header-inner'>
        <nav className='contact-nav'>
          <ul>
            <li><h3>Cameron McInnes</h3></li>
            <li> <a>github</a> </li>
            <li> <a>linkedin</a> </li>
            <li> <a>resume</a> </li>
          </ul>
        </nav>

        <nav className='project-nav'>
          <ul>
            <li><a>Play MTA</a></li>
            <li><a>Bandland</a></li>
            <li><a>GoRM</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;

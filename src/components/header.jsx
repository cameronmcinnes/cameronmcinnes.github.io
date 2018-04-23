import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import style from '../stylesheets/header.scss';

class Header extends React.Component {
  constructor() {
    super()
    this.state = { dropdownOpen: false };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  toggleDropDown() {
    this.setState( (prevState) => {
      return { dropdownOpen: !prevState.dropdownOpen }
    });
  }

  render() {
    const menuItems = (
      <ul>
        <li><Link to='/projects/playmta'>Play MTA</Link></li>
        <li><Link to='/projects/bandland'>Bandland</Link></li>
        <li><Link to='/projects/gorm'>GoRM</Link></li>
      </ul>
    );

    return (
      <header className='main-header'>
        <div className='header-inner'>
          <nav className='contact-nav'>
            <ul>
              <li><Link to='/'><h3>Cameron McInnes</h3></Link></li>
              <li><a href='https://github.com/cameronmcinnes'>github</a></li>
              <li><a href='https://www.linkedin.com/in/cameron-mcinnes-008bb625/'>linkedin</a></li>
              <li><Link to='/resume'>resume</Link></li>
            </ul>
          </nav>

          <div className='dropdown-trigger'>
            <FontAwesome name='bars'
              onClick={ this.toggleDropDown } />

            {
              this.state.dropdownOpen &&
              <nav className='mobile-nav'>
                {menuItems}
              </nav>
            }
          </div>

          <nav className='project-nav'>
            {menuItems}
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

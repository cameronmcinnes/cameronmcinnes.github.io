import React from 'react';
import { Switch, Route } from 'react-router-dom';

import style from '../stylesheets/style.scss';

import Header from './header';
import Landing from './landing/landing';
import ProjectShow from './project_show/project_show';
import Resume from './resume';

const App = () => (
  <main>
    <Header />
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/projects/:projectName' component={ProjectShow} />
    </Switch>

    <footer>
      <small>designed and built by Cameron McInnes 2018</small>
    </footer>
  </main>
)

export default App;

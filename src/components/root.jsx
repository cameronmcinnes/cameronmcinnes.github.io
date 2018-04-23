import React from 'react';
import { HashRouter } from 'react-router-dom';

import reset from '../stylesheets/reset.scss';

import App from './app.jsx'

const Root = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}

export default Root;

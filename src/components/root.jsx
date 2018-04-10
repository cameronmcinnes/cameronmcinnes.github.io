import React from 'react';
import { HashRouter } from 'react-router-dom';

import reset from '../reset.scss';
import style from '../style.scss';

import App from './app.jsx'

const Root = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}

export default Root;

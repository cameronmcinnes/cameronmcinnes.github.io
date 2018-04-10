import React from "react";
import ReactDOM from "react-dom";

import Root from './components/root.jsx'

document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('scroll', (e) => {
    const delta = e.deltaY ? e.deltaY/40 : e.detail ? -e.detail : 0;
    
  });

  ReactDOM.render(<Root />, document.getElementById("root"));
});

import React from "react";
import ReactDOM from "react-dom";

import Root from './components/root.jsx'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById("root"));


  const projects = document.getElementsByClassName('project-item-container')
  let totalDelta = 0;
  const viewPortHeight = (window.innerHeight || document.documentElement.clientHeight)

  const totalScrollDist = document.documentElement.scrollHeight - viewPortHeight;

  // window.addEventListener('mousewheel', (e) => {
  //   if (window.scrollY === 0 || window.scrollY === totalScrollDist) {
  //     return null;
  //   }
  //
  //   const delta = e.deltaY ? e.deltaY/4 : e.detail ? -e.detail : 0;
  //   totalDelta += delta
  //
  //   for (let i = 0; i < projects.length; i++) {
  //     projects[i].style.backgroundPositionY = `${totalDelta}px`
  //   }
  // });

});

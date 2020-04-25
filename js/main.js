import { LOL2D } from './LOL2D.js';

window.onload = function () {
  const { p5 } = window;
  p5.disableFriendlyErrors = true;

  new p5(LOL2D);
};

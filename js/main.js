import { Game } from './Game.js';

window.onload = function () {
  const { p5 } = window;

  p5.disableFriendlyErrors = true;

  const game = new p5(Game);
};

import Champions from '../classes/champions/Champions.js';
import { Global } from '../stores/Global.js';

import { InGame } from "./InGame.js";

const Menu = function () {
  this.enter = function () {
    console.log(Champions);
    
    for(let champ in Champions) {
      console.log(champ)
    }
  };

  this.draw = function () {
    Global.p5.background(0);

    Global.p5.fill(255);
    Global.p5.text('Click to play', Global.p5.width / 2, Global.p5.height / 2);
  };

  this.keyPressed = function () {
    this.sceneManager.showScene(InGame);
  };
};

export { Menu };

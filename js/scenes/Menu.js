import Champions from '../classes/champions/Champions.js';
import { Global } from '../stores/Global.js';
import { Dom } from '../utils/Dom.js';

const Menu = function () {
  let ahri;

  this.enter = function () {
    console.log(Champions);

    ahri = new Champions.Ahri();
  };

  this.draw = function () {
    Global.p5.background(0);
    ahri.show();
  };

  this.keyPressed = function () {};
};

export { Menu };

import Champions from '../classes/champions/Champions.js';
import { Global } from '../stores/Global.js';

const Menu = function () {
  let ahri, ahri2;

  this.enter = function () {
    console.log(Champions);

    ahri = new Champions.Ahri();
    ahri2 = new Champions.Ahri();
  };

  this.draw = function () {
    Global.p5.background(0);
    ahri.show(Global.p5);
    ahri2.show(Global.p5);
  };

  this.keyPressed = function () {
    ahri.Q();
  };
};

export { Menu };

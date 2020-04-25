import { Ahri } from '../classes/champions/Ahri.js';
import { Global } from '../stores/Global.js';

const Menu = function () {
  const { p5: _ } = Global;
  let bg;

  this.enter = function () {
    _.imageMode(_.CENTER);
    _.textAlign(_.CENTER, _.CENTER);
    _.textSize(20);
    _.fill(255);

    let arhi = new Ahri();

    bg = Global.assets['ahri_bg'];
  };

  this.draw = function () {
    _.image(bg, _.width / 2, _.height / 2);

    _.background(30, 100);
    _.text('This project is under development', _.width / 2, _.height / 2);
  };
};

export { Menu };

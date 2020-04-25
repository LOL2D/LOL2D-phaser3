import { getAssetP5Image } from '../stores/Global.js';
import { Ahri } from '../classes/champions/Ahri.js';

const Menu = function (_) {
  let yasuo, arhi;

  this.enter = function () {
    _.imageMode(_.CENTER);
    _.textAlign(_.CENTER, _.CENTER);
    _.textSize(20);
    _.fill(255);

    arhi = new Ahri();

    yasuo = getAssetP5Image('yasuo');
  };

  this.draw = function () {
    _.image(yasuo, _.width / 2, _.height / 2);

    _.background(30, 200);
    _.text('The project is under development', _.width / 2, _.height / 2);
  };
};

export { Menu };

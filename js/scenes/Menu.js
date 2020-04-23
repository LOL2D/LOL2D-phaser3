import { getAsset } from '../stores/GameData.js';

const Menu = function (_) {
  let yasuo;

  this.enter = function () {
    _.imageMode(_.CENTER);

    yasuo = getAsset('yasuo');
  };

  this.draw = function () {
    _.background(30);

    _.image(yasuo, _.width / 2, _.height / 2);
  };
};

export { Menu };

import Dom from '../utils/Dom.js';
import { Menu } from './Menu.js';

const assets = {
  yasuo: 'assets/images/characters/yasuo.png',
  lux: 'assets/images/characters/lux.png',
  jinx: 'assets/images/characters/jinx.png',
  blitzcrank: 'assets/images/characters/blitzcrank.png',
};

const Loading = function (_) {
  const assetsCount = Object.keys(assets).length;
  let loadedCount = 0;

  this.enter = function () {
    const checkFinish = () => {
      if (loadedCount == assetsCount) {
        setTimeout(() => {
          Dom.loadingDiv.style.display = 'none';
          this.sceneManager.showScene(Menu);
        }, 2000);
      }
    };

    this.sceneManager.assets = {};

    for (let key in assets) {
      let url = assets[key];

      this.sceneManager.assets[key] = _.loadImage(
        url,
        // on success
        (e) => {
          loadedCount++;
          checkFinish();
        },
        // on error
        (error) => {
          loadedCount++;
          checkFinish();
        },
        // on loading
        (e) => {
          console.log(e);
        }
      );
    }
  };
};

export { Loading };

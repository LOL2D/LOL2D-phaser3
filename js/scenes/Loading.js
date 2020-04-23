import Dom from '../utils/Dom.js';
import { Menu } from './Menu.js';
import { assets } from '../utils/Config.js';

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
